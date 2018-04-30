module.exports=(bytes)=> {
  if(bytes < 1024) return bytes + " b";
  else if(bytes < 1048576) return(bytes / 1024).toFixed(0) + " kb";
  else if(bytes < 1073741824) return(bytes / 1048576).toFixed(2) + " mb";
  else return(bytes / 1073741824).toFixed(2) + " gb";
};
