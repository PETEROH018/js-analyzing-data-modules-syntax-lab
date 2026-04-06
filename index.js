
require('datejs');
function combineUsers(...args){
  const combinedObject = { 
    users : [] ,
    merge_date : Date.today().toString("M/d/yyyy")

  }
  combinedObject.users = args.reduce((combinedArray,currentArray) => {return [...combinedArray,...currentArray]},[])
  return combinedObject
}

module.exports = { 
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

