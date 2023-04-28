import { program } from "commander";
import inquirer from "inquirer";
import fs from 'fs'

program
  .command('createHTML')
  .description('html 생성 명령어')
  .action(async () => {
    const htmlname = await inquirer.prompt([

      {
        type: 'input',
        name: 'html',
        message: 'HTML 파일 이름 입력'
      },
      {
        type: 'checkbox',
        name: 'id',
        message: 'id root 적용 유무',

        choices: [
          { name: 'yes', value: true },
          { name: 'no', value: false }
        ]
      },
      {

        type : 'input',
        name : 'detail',
        message : '내용을 작성하세요.'

      }
    
    ]
    );


    const content = `
    <html>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
      <body>
        <div${htmlname.id ? ' id="root"' : ''}>
        <p>${htmlname.detail}</p>
        </div>
      </body>
    </html>`;



    fs.writeFile(`result/${htmlname.html}.html`, content, function (err) {
      if (err) throw err;
      console.log('HTML 파일이 생성되었습니다.');
    });



  });
program.parse(process.argv);