const changeTheme = (newThemeName) => {
  document.getElementById('root').className = "root " + newThemeName;  
}

export default changeTheme;