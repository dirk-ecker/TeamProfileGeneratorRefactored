import fs from 'fs'
import inquirer from 'inquirer'
import generateHTML from './src/generateHTML.js'

const team = []

// returns a question object for the specified type of employee
const employeeQuestions = (type) => [
  {
    type: 'input',
    name: 'name',
    message: 'Name?'
  },
  {
    type: 'input',
    name: 'id',
    message: 'Id?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Email?'
  },
  {
    when: () => type === 'Manager',
    type: 'input',
    name: 'number',
    message: 'Number?'
  },
  {
    when: () => type === 'Engineer',
    type: 'input',
    name: 'github',
    message: 'GitHub'
  },
  {
    when: () => type === 'Intern',
    type: 'input',
    name: 'school',
    message: 'School?'
  },
  {
    type: 'list',
    name: 'add',
    message: 'Add member to team?',
    choices: [
      'Engineer',
      'Intern',
      'Done'
    ]
  }
]

async function start() {
  let employeeType = 'Manager'
  do {
    const questions = employeeQuestions(employeeType)
    const answers = await inquirer.prompt(questions)
    team.push({ employeeType, ...answers })
    employeeType = answers.add
  } while (employeeType !== 'Done')

  fs.writeFile('team.html', generateHTML(team),(error) => error
    ? console.error(error)
    : console.log('Success'))
}

start()
