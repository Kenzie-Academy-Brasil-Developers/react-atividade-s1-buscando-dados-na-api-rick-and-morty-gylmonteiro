const Characters = ({ characterList }) => {
  return (
    <>
      <h1>Meus personagens</h1>
      {characterList.map((student) => (
        <div key={student.id}>Nome: {student.name} -</div>
      ))}
    </>
  );
};

export default Characters;
