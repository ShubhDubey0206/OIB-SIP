const exprDisplay = document.getElementById('expression');
    const resultDisplay = document.getElementById('result');
    const buttons = document.querySelectorAll('button');

    let input = '';
    let lastAns = '';

    function updateDisplay() {
      exprDisplay.textContent = input;
    }

    function calculate() {
      try {
        let expr = input.replace(/x/g, '*').replace(/÷/g, '/').replace(/√/g, 'Math.sqrt');
        let result = eval(expr);
        resultDisplay.textContent = result;
        lastAns = result;
        input = result.toString();
      } catch {
        resultDisplay.textContent = 'Error';
        input = '';
      }
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.textContent;

        switch (val) {
          case 'ENTER':
            calculate();
            break;
          case 'clear':
            input = '';
            resultDisplay.textContent = '0';
            break;
          case 'del':
            input = input.slice(0, -1);
            break;
          case 'ans':
            input += lastAns;
            break;
          case '+/-':
            input += '-';
            break;
          case '√':
            input += '√(';
            break;
          default:
            input += val;
        }

        updateDisplay();
      });
    });