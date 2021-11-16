var saldo = 600; //Float 1.36
		var senha = 3589

		var nome= prompt("Diga seu nome")
		alert("É um prazer ter você por aqui, "+ nome, '!')


		function inicio() {

			var escolha = parseInt(prompt('Selecione uma opção: \n1) Saldo \n2) Extrato \n3) Saque \n4) Depósito \n5) Transferência \n6) sair'));

			switch (escolha) {
				case 1:
					ver_saldo();
					break;
				case 2:
					ver_extrato();
					break;
				case 3:
					fazer_saque();
					break;
				case 4:
					fazer_deposito();
					break;
				case 5:
					fazer_transf();
					break;
				case 6:
					sair();
					break;
				default:
					erro();
			}
				
		}

		function fazer_transf(){
			var c_tra = prompt("Informe o número da conta:")
			if (isNaN(c_tra) || c_tra < 0){
				alert("Insira uma conta válida!");
				fazer_transf();
			} 
			else{
				var transf = parseFloat(prompt("Insira o valor da transferência:"))
				if (transf <= 0 || transf > saldo){
					alert("Operação não autorizada.");
					fazer_transf();
				}
				else{
					var conf = prompt("Insira a senha")
					if (conf == senha){
						saldo = saldo - transf;
						alert("Transferência efetuada com sucesso!");
						ver_saldo();
						inicio();
					}
					else {
						alert ("Senha incorrte, tente novamente.");
						fazer_transf();
					}

				}
			}
		}
		
		function ver_extrato(){
			var conf = prompt("Insira a senha")
				if (conf == senha){
					alert("Seu extrato: \nPagamento...........+R$ 900 \nSuper-mercado.......-R$ 300");
					inicio();
				}
				else {
					alert ("Senha incorrte, tente novamente.");
					ver_extrato();
				}
		}

		function ver_saldo() {
			var conf = prompt("Insira a senha")
				if (conf == senha){
					alert('Seu saldo atual é: ' + saldo);
					inicio();
				}
				else {
					alert ("Senha incorrte, tente novamente.");
					ver_saldo();
				}

		}

		function fazer_deposito() {
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
			// Not a Number
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número:');
				fazer_deposito();
			} 
			else if (deposito <= 0){
				alert("Operação não autorizada.");
				fazer_deposito();
			}
			else {
				var conf = prompt("Insira a senha")
				if (conf == senha){
					saldo += deposito;
					ver_saldo();
				}
				else {
					alert ("Senha incorrte, tente novamente.");
					fazer_deposito();
				}

			}
		}

		function fazer_saque() {
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			if (saque > saldo || saque <= 0){
				alert("Operação não autorizada.");
				fazer_saque();
			}
			else if (isNaN(saque) || saque === '') {
				alert('Por favor, informe um número:');
				fazer_saque();
			} 
			else {
				var conf = prompt("Insira a senha")

				if (conf == senha){
					saldo -= saque;
					ver_saldo();
				}
				else {
					alert ("Senha incorrte, tente novamente.");
					fazer_saque();
				}

				
			}
		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 6');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert(nome+ ", foi um prazer ter você por aqui!")
				window.close();
			} else {
				inicio();
			}
		}

		
		
		inicio();
