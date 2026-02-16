// Q1
			document.getElementsByTagName("h1")[0].innerText = "Computer Science Engineering" 

			// Q2:
			// query all heading2 elements in my page
			let h2Collection = document.getElementsByTagName('h2');
			for (let i = 0 ; i < h2Collection.length ; i++){
				let h2 = h2Collection[i];
				let a = h2.children[0];
				let professorName = a.innerText;
				let tokens = professorName.split(" ");
				let lastName = tokens[tokens.length - 1];
				a.innerText = `Prof. ${lastName}`;
			}
			// Q3:
			