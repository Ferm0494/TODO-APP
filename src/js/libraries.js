const library = () => {
  const projects = JSON.parse(localStorage.getItem('projects')) || [];
  return projects;
};

export default library;