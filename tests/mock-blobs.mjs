const all=new Map();let counter=0;
export function reset(){all.clear();counter=0}
export function getStore(input){const name=typeof input==='string'?input:input.name;if(!all.has(name))all.set(name,new Map());const m=all.get(name);const cp=x=>structuredClone(x);
 return {
  async get(k){const x=m.get(k);return x?cp(x.data):null},
  async getWithMetadata(k){const x=m.get(k);return x?{data:cp(x.data),etag:x.etag,metadata:{}}:null},
  async setJSON(k,v,opts={}){const old=m.get(k);if(opts.onlyIfNew&&old)return{modified:false};if(opts.onlyIfMatch&&(!old||old.etag!==opts.onlyIfMatch))return {modified:false};const etag='"etag'+(++counter)+'"';m.set(k,{data:cp(v),etag});return {modified:true,etag}},
  async delete(k){m.delete(k)},
  async list(opts={}){return {blobs:[...m.keys()].filter(x=>x.startsWith(opts.prefix||'')).map(key=>({key}))}}
 }
}
