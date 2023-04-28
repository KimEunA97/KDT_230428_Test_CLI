//빠르게 html 생산하는 CLI
//1. CLI로 입력받은 데이터가 html 파일의 이름으로 사용됨
//2. 
import { program } from 'commander'
import inquirer from 'inquirer';
import fs from 'fs'

inquirer
  .prompt([
    {
      type: 'input',
      name: 'filename',
      message: 'html 파일 이름'
    },
    {
      type: 'checkbox',
      name: 'root',
      message: 'div 태그에 id로 root를 적용할까요? SPACE로 선택 \n',
      choices: [
        { name: '네', value: true },
        { name: '아니오', value: false }
      ]
    }
  ])
  .then((answers) => {

    console.log('Answers:', answers);

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("에러");
    }
    else {
      console.log("다른 문제 발생");
    }
  })


