export class User {
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  user = new Object();
  users = [];

  signUp() {
    if (this.email == '' || this.password == '' || this.repeatPassword == '') {
      console.log('Debes llenar todos los campos.');
    } else {
      if (this.password != this.repeatPassword) {
        console.log('Las claves no coinciden');
      } else {
        this.user = {
          email: this.email,
          password: this.password,
        };
        this.users.push(this.user);
        sessionStorage.setItem('users', JSON.stringify(this.users));
        console.log('Usuario creado con exito!');
      }
    }
  }

  signIn() {
    let obtainedUsersArr = JSON.parse(sessionStorage.getItem('users'));
    let foundUser = false;
    obtainedUsersArr.forEach((user) => {
      if (this.email == user.email && this.password == user.password) {
        console.log('Usuario logeado correctamente!');
        foundUser = true;
      }
    });

    if (!foundUser) {
      console.log('Las credenciales no son validas!');
    }
  }
}
