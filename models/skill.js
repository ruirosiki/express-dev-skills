//Object containing a bunch of developer skills and level.
const skills = [
  { id: 123, skill: "CSS", level: "Beginner" },
  { id: 124, skill: "JavaScript", level: "Beginner" },
  { id: 125, skill: "HTML", level: "Beginner" },
  { id: 126, skill: "Node.js", level: "Beginner" },
  { id: 127, skill: "Express", level: "Beginner" },
];

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const index = skills.findIndex((skill) => skill.id === id);
  skills.splice(index, 1);
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};
