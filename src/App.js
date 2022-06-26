import "./styles.css";
function Skills() {
  const Skills = ["skill1", "skill2", "skill3"];
  return (
    <ul>
      {Skills.map((skill) => (
        <li>{skill}</li>
      ))}
    </ul>
  );
}
export default function App() {
  return (
    <>
      <Skills />
    </>
  );
}
