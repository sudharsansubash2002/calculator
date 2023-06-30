// Importing modules
import React, { useEffect, useState } from "react";
// import { ethers } from "ethers";
import "./App.css";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Types, AptosClient } from 'aptos';
// import {tokenaddress1,abi1,tokenaddress2,abi2,stakingaddress,abi3} from "./abi";
// import web3 from "./web3";
import {useRef} from "react";



function App() {

// usetstate for storing and retrieving wallet details
const [data, setdata] = useState({
	address: "",
	Balance: null,
});

const inputamt=useRef(null);
const inputamt1=useRef(null);
const inputamt2=useRef(null);
const inputamt3=useRef(null);
const inputamt4=useRef(null);
const inputamt5=useRef(null);
const inputamt6=useRef(null);
const inputamt7=useRef(null);
// const inputamt8=useRef(null);




//petra wallet
const getAptosWallet = () => {
  if ('aptos' in window) {
    return window.aptos;
  } else {
    window.open('https://petra.app/', `_blank`);
  }
};

const wallet = getAptosWallet();
const Walletconnect = async() => { 
	try {
  const response = await wallet.connect();
  console.log(response); // { address: string, address: string }

  const account = await wallet.account();
  console.log(account); // { address: string, address: string }

  console.log("wallet connected successfully")
} catch (error) {
  // { code: 4001, message: "User rejected the request."}
  console.log("ERROR");
}
}

const Disconnect = async() => {
	const res = await wallet.disconnect();
	console.log(res);
}




			const escrow_account = async () => {
				const transaction = {
				type: "entry_function_payload",
				function: `0xef9990736bdbfcb3e4ab7c036e61166659baaa1ac4faa5194f99cb4c07de0a29::Calculator::create_new_pool`,
				arguments: [],
				type_arguments: [],
				};
				try {
				const pendingTransaction = await (window).aptos.signAndSubmitTransaction(transaction);
				console.log("pendingTransaction", pendingTransaction);
				const client = new AptosClient('https://testnet.aptoslabs.com');
				client.waitForTransaction(pendingTransaction.hash);
				console.log("account created");
				} catch (error) {
					console.log("error");
				}
				}

				const add_int = async () => {
					const transaction = {
					type: "entry_function_payload",
					function: `0xef9990736bdbfcb3e4ab7c036e61166659baaa1ac4faa5194f99cb4c07de0a29::Calculator::add`,
					arguments: [inputamt.current.value,inputamt1.current.value],
					type_arguments: [],
					};
					try {
					const pendingTransaction = await (window).aptos.signAndSubmitTransaction(transaction);
					console.log("pendingTransaction", pendingTransaction);
					const client = new AptosClient('https://testnet.aptoslabs.com');
					client.waitForTransaction(pendingTransaction.hash);
					console.log("added");
					} catch (error) {
						console.log("error");
					}
					}

					const sub_int = async () => {
						const transaction = {
						type: "entry_function_payload",
						function: `0xef9990736bdbfcb3e4ab7c036e61166659baaa1ac4faa5194f99cb4c07de0a29::Calculator::sub`,
						arguments: [inputamt2.current.value,inputamt3.current.value],
						type_arguments: [],
						};
						try {
						const pendingTransaction = await (window).aptos.signAndSubmitTransaction(transaction);
						console.log("pendingTransaction", pendingTransaction);
						const client = new AptosClient('https://testnet.aptoslabs.com');
						client.waitForTransaction(pendingTransaction.hash);
						console.log("added");
						} catch (error) {
							console.log("error");
						}
						}

						const mul_int = async () => {
							const transaction = {
							type: "entry_function_payload",
							function: `0xef9990736bdbfcb3e4ab7c036e61166659baaa1ac4faa5194f99cb4c07de0a29::Calculator::mul`,
							arguments: [inputamt4.current.value,inputamt5.current.value],
							type_arguments: [],
							};
							try {
							const pendingTransaction = await (window).aptos.signAndSubmitTransaction(transaction);
							console.log("pendingTransaction", pendingTransaction);
							const client = new AptosClient('https://testnet.aptoslabs.com');
							client.waitForTransaction(pendingTransaction.hash);
							console.log("added");
							} catch (error) {
								console.log("error");
							}
							}

							const div_int = async () => {
								const transaction = {
								type: "entry_function_payload",
								function: `0xef9990736bdbfcb3e4ab7c036e61166659baaa1ac4faa5194f99cb4c07de0a29::Calculator::add`,
								arguments: [inputamt6.current.value,inputamt7.current.value],
								type_arguments: [],
								};
								try {
								const pendingTransaction = await (window).aptos.signAndSubmitTransaction(transaction);
								console.log("pendingTransaction", pendingTransaction);
								const client = new AptosClient('https://testnet.aptoslabs.com');
								client.waitForTransaction(pendingTransaction.hash);
								console.log("added");
								} catch (error) {
									console.log("error");
								}
								}


					
 
	

return (
	<div className="App">
	{/* Calling all values which we
	have stored in usestate */}

	<Card className="text-center">
		<Card.Header>
		<strong>Address: </strong>
		{data.address}
		</Card.Header>
		<Card.Body>
		<Card.Text>
			<strong>Balance: </strong>
			{data.Balance}
		</Card.Text>
		<Button onClick={Walletconnect} variant="primary">
			Connect to wallet
		</Button>
		<br/>
		<br/>
		<Button onClick={Disconnect} variant="primary">
			DisConnect
		</Button>
		<br/>
		<br/>
		<Button onClick={escrow_account} variant="primary">
			Create escrow
		</Button>
		<br/>
		<br/>
		<label>operand 1:</label>&nbsp;&nbsp;<input ref={inputamt}
        type="text"
        id="amt1"
        name="amt1"/>&nbsp;&nbsp;
		<label>operand 2:</label>&nbsp;&nbsp;<input ref={inputamt1}
        type="text"
        id="amt2"
        name="amt2"/>&nbsp;&nbsp;
		<br/><br/>
		<Button onClick={add_int} variant="primary">
			add
		</Button>
		<br/>
		<br/>
		
		
		<label>operand 1:</label>&nbsp;&nbsp;<input ref={inputamt2}
        type="text"
        id="amt3"
        name="amt3"/>&nbsp;&nbsp;
		<label>operand 2:</label>&nbsp;&nbsp;<input ref={inputamt3}
        type="text"
        id="amt4"
        name="amt4"/>
		<br/>
		<br/>
		<Button onClick={sub_int} variant="primary">
			Subtract
		</Button>
		<br/>
		<br/>
		
		
		<label>operand 1:</label>&nbsp;&nbsp;<input ref={inputamt4}
        type="text"
        id="amt5"
        name="amt5"/>&nbsp;&nbsp;
		<label>operand 2:</label>&nbsp;&nbsp;<input ref={inputamt5}
        type="text"
        id="amt6"
        name="amt6"/>
		<br/>
		<br/>
		<Button onClick={mul_int} variant="primary">
			Multiply
		</Button>
		<br/>
		<br/>
		
		
		<label>operand 1:</label>&nbsp;&nbsp;<input ref={inputamt6}
        type="text"
        id="amt7"
        name="amt7"/>&nbsp;&nbsp;
		<label>operand 2:</label>&nbsp;&nbsp;<input ref={inputamt7}
        type="text"
        id="amt8"
        name="amt8"/>
		<br/>
		<br/>
		<Button onClick={div_int} variant="primary">
			Divide
		</Button>
		

		</Card.Body>
	</Card>
	</div>
);

}
export default App;

