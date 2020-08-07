/* eslint-disable no-alert */

import library from './libraries';

const project = (obj) => {
  const projects = library();
  const validate = () => {
    const title = obj.value.trim();

    if (projects.includes(title)) {
      obj.setCustomValidity('Element already exists');
      obj.reportValidity();
      return false;
    } if (title === '') {
      obj.setCustomValidity('Can\'t be empty');
      obj.reportValidity();
      return false;
    }
    return true;
  };

  const addProject = () => {
    const title = obj.value.trim();
    if (validate()) {
      projects.push(title);
      localStorage.setItem('projects', JSON.stringify(projects));
      alert('Project successfully added!');
    }
  };

  addProject();
};

const deleteProject = (value) => {
  const newLibrary = library().filter(e => e !== value);
  localStorage.setItem('projects', JSON.stringify(newLibrary));
  localStorage.removeItem(value);
  return newLibrary;
};

export {
  project,
  deleteProject,
};