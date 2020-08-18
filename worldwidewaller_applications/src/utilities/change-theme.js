const changeTheme = (newThemeName) => {
  
  var test = document.getElementById('root');
  document.getElementById('root').className = "root " + newThemeName;  
}

export default changeTheme;