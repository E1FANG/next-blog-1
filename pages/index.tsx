import jpg from '../assets/images/1.jpg'

console.log(jpg);
export default function Home() {
  return (
    <div>
      <h1>标题</h1>
      <p>段落</p>
      <img src={jpg} alt=""/>
      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>
    </div>
  );
}
