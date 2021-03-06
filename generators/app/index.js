'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the super-excellent ' + chalk.red('generator-vue-mpa-package') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    var filename = [
      './**/.*',
      './**/*.*'
    ]
    this.fs.copy(
      this.templatePath(filename[0]),
      this.destinationPath(''),
    );
    this.fs.copy(
      this.templatePath(filename[1]),
      this.destinationPath(''),
      {
        globOptions : {
            dot : 'npmignore',
        }
      }
    );
  }

  install() {
    // this.installDependencies();
  }
};
