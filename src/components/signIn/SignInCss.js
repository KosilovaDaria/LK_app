import './index.css';


const SignInCss = () => {
return(
  <div className='container'>
    <div className='box'>
      <div className='box_content'>
     <h2>Вход в ЛК</h2>
     <input placeholder='Эл. почта'></input>
     <input placeholder='Пароль'></input>
     <input type='checkbox'></input>
     <button>Войти</button>
     <p>Как создать аккаунт?</p>
     <p>Забыли пароль?</p>
      </div>
      
    </div>

  </div>
)
}

export default SignInCss;