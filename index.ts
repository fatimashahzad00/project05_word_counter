import inquirer from "inquirer";

const answers:{
    Paragraph: string
} = await inquirer.prompt([{
    type: "input",
    name: "Paragraph",
    message: "Enter a pararaph text"
}]);

const {Paragraph}  = answers;
const pararaph = Paragraph;
const character = pararaph.replace(/\s/g, '').length;
const words = pararaph.split(' ').length;
console.log(`The paragraph contains ${character} characters and ${words} words.`);
