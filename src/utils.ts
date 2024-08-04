export function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
            Object.create(null)
        );
      });
    });
  }

  export function createUrlParameters(params: Record<string, any>): string{
    const urlParams = new URLSearchParams()

    for (const key in params){
      if (params.hasOwnProperty(key)){
        const value = params[key]
        if (value !== undefined && value !== null){
          if (Array.isArray(value)){
            value.forEach(item => urlParams.append(key, value.toString()))
          }else{
            urlParams.append(key, value.toString())
          }
        }
      }
    }

    return urlParams.toString()
  }