const Tasks = (props) => {
  return (
    <>
      {props.tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
