module.exports = {
    default: {
      paths: ['tests/features/**/*.feature'],
      require: ['src/hooks/**/*.js', 'tests/step-definitions/**/*.js'],
      format: [
        'progress-bar',
        'html:reports/cucumber-report.html'
      ],
      publishQuiet: true
    }
  };
  