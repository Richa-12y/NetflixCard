import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
//Img,cardcategory,cardtitle,linktag

function App ()
{
  return (
    <>
    <Card Img="https://tse1.mm.bing.net/th?id=OIP.cWrFG47DGXH-M7_jo8seRwHaEK&pid=Api&P=0&w=319&h=180" cardcategory="A Netflix Original Series" cardtitle="Extracurricular" linktag="https://www.netflix.com/in/title/80990668?source=35%22" style={{width:"500px",height:"700px"}} />


    <Card Img="https://tse4.mm.bing.net/th?id=OIP.ak0QnZhwFgK6jcWn9-IxigHaEP&pid=Api&P=0&w=278&h=160" cardcategory="A Netflix Original Series" cardtitle="Voice" linktag="https://www.netflix.com/in/title/80987095" style={{width:"500px",height:"700px"}}/>


    <Card Img="https://tse4.mm.bing.net/th?id=OIP.oaBLmtWewXsjnc-8TyLleQHaEK&pid=Api&P=0&w=330&h=186" cardcategory="A Netflix Original Series" cardtitle="Blach" linktag="https://www.netflix.com/in/title/80214013"style={{width:"500px",height:"700px"}} />

    </>
  );
}

export default App;
