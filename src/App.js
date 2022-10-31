 import './App.css';
 import './skullgif.gif';
 
 import Button from 'react-bootstrap/Button';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Web3 from 'web3'; 
 import axios from 'axios';
 import banner from './mintplay.jpg';
 import logosm from './logosms.png';
 import meta from './meta.png';
 import skullgif from './skullgif.gif';
 import React, { Component } from 'react'; 
 

 var ABI = [{
         "inputs": [],
         "stateMutability": "nonpayable",
         "type": "constructor"
     },
     {
         "anonymous": false,
         "inputs": [{
                 "indexed": true,
                 "internalType": "address",
                 "name": "owner",
                 "type": "address"
             },
             {
                 "indexed": true,
                 "internalType": "address",
                 "name": "approved",
                 "type": "address"
             },
             {
                 "indexed": true,
                 "internalType": "uint256",
                 "name": "tokenId",
                 "type": "uint256"
             }
         ],
         "name": "Approval",
         "type": "event"
     },
     {
         "anonymous": false,
         "inputs": [{
                 "indexed": true,
                 "internalType": "address",
                 "name": "owner",
                 "type": "address"
             },
             {
                 "indexed": true,
                 "internalType": "address",
                 "name": "operator",
                 "type": "address"
             },
             {
                 "indexed": false,
                 "internalType": "bool",
                 "name": "approved",
                 "type": "bool"
             }
         ],
         "name": "ApprovalForAll",
         "type": "event"
     },
     {
         "anonymous": false,
         "inputs": [{
                 "indexed": true,
                 "internalType": "address",
                 "name": "previousOwner",
                 "type": "address"
             },
             {
                 "indexed": true,
                 "internalType": "address",
                 "name": "newOwner",
                 "type": "address"
             }
         ],
         "name": "OwnershipTransferred",
         "type": "event"
     },
     {
         "anonymous": false,
         "inputs": [{
                 "indexed": true,
                 "internalType": "address",
                 "name": "from",
                 "type": "address"
             },
             {
                 "indexed": true,
                 "internalType": "address",
                 "name": "to",
                 "type": "address"
             },
             {
                 "indexed": true,
                 "internalType": "uint256",
                 "name": "tokenId",
                 "type": "uint256"
             }
         ],
         "name": "Transfer",
         "type": "event"
     },
     {
         "inputs": [{
                 "internalType": "address",
                 "name": "to",
                 "type": "address"
             },
             {
                 "internalType": "uint256",
                 "name": "tokenId",
                 "type": "uint256"
             }
         ],
         "name": "approve",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [{
             "internalType": "address",
             "name": "owner",
             "type": "address"
         }],
         "name": "balanceOf",
         "outputs": [{
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [],
         "name": "baseExtension",
         "outputs": [{
             "internalType": "string",
             "name": "",
             "type": "string"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [],
         "name": "baseURI",
         "outputs": [{
             "internalType": "string",
             "name": "",
             "type": "string"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [],
         "name": "cost",
         "outputs": [{
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [{
             "internalType": "uint256",
             "name": "tokenId",
             "type": "uint256"
         }],
         "name": "getApproved",
         "outputs": [{
             "internalType": "address",
             "name": "",
             "type": "address"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [{
                 "internalType": "address",
                 "name": "owner",
                 "type": "address"
             },
             {
                 "internalType": "address",
                 "name": "operator",
                 "type": "address"
             }
         ],
         "name": "isApprovedForAll",
         "outputs": [{
             "internalType": "bool",
             "name": "",
             "type": "bool"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [],
         "name": "maxMintAmount",
         "outputs": [{
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [],
         "name": "maxSupply",
         "outputs": [{
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [{
                 "internalType": "address",
                 "name": "_to",
                 "type": "address"
             },
             {
                 "internalType": "uint256",
                 "name": "_mintAmount",
                 "type": "uint256"
             }
         ],
         "name": "mint",
         "outputs": [],
         "stateMutability": "payable",
         "type": "function"
     },
     {
         "inputs": [],
         "name": "name",
         "outputs": [{
             "internalType": "string",
             "name": "",
             "type": "string"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [],
         "name": "owner",
         "outputs": [{
             "internalType": "address",
             "name": "",
             "type": "address"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [{
             "internalType": "uint256",
             "name": "tokenId",
             "type": "uint256"
         }],
         "name": "ownerOf",
         "outputs": [{
             "internalType": "address",
             "name": "",
             "type": "address"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [{
             "internalType": "bool",
             "name": "_state",
             "type": "bool"
         }],
         "name": "pause",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [],
         "name": "paused",
         "outputs": [{
             "internalType": "bool",
             "name": "",
             "type": "bool"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [],
         "name": "renounceOwnership",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [{
                 "internalType": "address",
                 "name": "from",
                 "type": "address"
             },
             {
                 "internalType": "address",
                 "name": "to",
                 "type": "address"
             },
             {
                 "internalType": "uint256",
                 "name": "tokenId",
                 "type": "uint256"
             }
         ],
         "name": "safeTransferFrom",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [{
                 "internalType": "address",
                 "name": "from",
                 "type": "address"
             },
             {
                 "internalType": "address",
                 "name": "to",
                 "type": "address"
             },
             {
                 "internalType": "uint256",
                 "name": "tokenId",
                 "type": "uint256"
             },
             {
                 "internalType": "bytes",
                 "name": "_data",
                 "type": "bytes"
             }
         ],
         "name": "safeTransferFrom",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [{
                 "internalType": "address",
                 "name": "operator",
                 "type": "address"
             },
             {
                 "internalType": "bool",
                 "name": "approved",
                 "type": "bool"
             }
         ],
         "name": "setApprovalForAll",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [{
             "internalType": "string",
             "name": "_newBaseExtension",
             "type": "string"
         }],
         "name": "setBaseExtension",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [{
             "internalType": "string",
             "name": "_newBaseURI",
             "type": "string"
         }],
         "name": "setBaseURI",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [{
             "internalType": "uint256",
             "name": "_newmaxMintAmount",
             "type": "uint256"
         }],
         "name": "setmaxMintAmount",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [{
             "internalType": "bytes4",
             "name": "interfaceId",
             "type": "bytes4"
         }],
         "name": "supportsInterface",
         "outputs": [{
             "internalType": "bool",
             "name": "",
             "type": "bool"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [],
         "name": "symbol",
         "outputs": [{
             "internalType": "string",
             "name": "",
             "type": "string"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [{
             "internalType": "uint256",
             "name": "index",
             "type": "uint256"
         }],
         "name": "tokenByIndex",
         "outputs": [{
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [{
                 "internalType": "address",
                 "name": "owner",
                 "type": "address"
             },
             {
                 "internalType": "uint256",
                 "name": "index",
                 "type": "uint256"
             }
         ],
         "name": "tokenOfOwnerByIndex",
         "outputs": [{
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [{
             "internalType": "uint256",
             "name": "tokenId",
             "type": "uint256"
         }],
         "name": "tokenURI",
         "outputs": [{
             "internalType": "string",
             "name": "",
             "type": "string"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [],
         "name": "totalSupply",
         "outputs": [{
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [{
                 "internalType": "address",
                 "name": "from",
                 "type": "address"
             },
             {
                 "internalType": "address",
                 "name": "to",
                 "type": "address"
             },
             {
                 "internalType": "uint256",
                 "name": "tokenId",
                 "type": "uint256"
             }
         ],
         "name": "transferFrom",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [{
             "internalType": "address",
             "name": "newOwner",
             "type": "address"
         }],
         "name": "transferOwnership",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [{
             "internalType": "address",
             "name": "_owner",
             "type": "address"
         }],
         "name": "walletOfOwner",
         "outputs": [{
             "internalType": "uint256[]",
             "name": "",
             "type": "uint256[]"
         }],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [],
         "name": "withdraw",
         "outputs": [],
         "stateMutability": "payable",
         "type": "function"
     }
 ]



 var account = null;
 var contract = null;
 const apikey = "ZX9EDARB4A2GBAQG2DP62DZJIP8VZ3NC26";
 const ADDRESS = "0xf5d25D8700C26C8F4E0DeDAa83179Af251431705";
 const endpoint = "https://api-testnet.bscscan.com/api";
//const nftpng = "http://127.0.0.1:8080/ipfs/QmPuJEXCpT58AejYzgYwRdXF9Yz1bUdk2hGPFaD31t1G5v/";
 
const nftpng = "https://ipfs.io/ipfs/QmPuJEXCpT58AejYzgYwRdXF9Yz1bUdk2hGPFaD31t1G5v/";
 
 
 

 async function connectwallet() { 


     if (window.ethereum) { 
        var web3 = new Web3(window.ethereum); 
        await window.ethereum.send('eth_requestAccounts'); 
        var accounts = await web3.eth.getAccounts(); 
        account = accounts[0]; 
        document.getElementById('wallet-address').textContent = account; 
        contract = new web3.eth.Contract(ABI, ADDRESS);
        document.getElementById('walcon').textContent = account; 
        const provider = window.ethereum;
        if(!provider){
        console.log("Metamask is not installed, please install!");
        }
        const chainId = await provider.request({ method: "eth_chainId" });
        const binanceTestChainId = '0x61'
        if(chainId === binanceTestChainId){
        console.log("you are on the correct network");
        }else{
        console.log("switch to the correct network")
        try {
            await provider.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: binanceTestChainId}],
            });
          console.log("You have succefully to network")
          } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
             console.log("This network is not available in your metamask, please add it")
            }
            console.log("Failed to switch to the network")
          }
        }
        }
       
        

 }


 

 async function mint() {
    if (window.ethereum) { 
        var _mintAmount = Number(document.querySelector("[name=amount]").value); 
        var mintRate = Number(await contract.methods.cost().call()); 
        var totalAmount = mintRate * _mintAmount; 
      contract.methods.mint(account, _mintAmount).send({ from: account, value: String(totalAmount) }); 
     
        }
        
    } 

 class App extends Component {
     constructor() {
         super();
         this.state = {
             balance: [],
             nftdata: [],
         };
     }

     async componentDidMount() {


         await axios.get((endpoint + `?module=stats&action=tokensupply&contractaddress=${ADDRESS}&apikey=${apikey}`))
             .then(outputa => {
                 this.setState({
                     balance: outputa.data
                 })
                 console.log(outputa.data)
             })
            
             .catch(error => {
                 console.log(error.response)
             });

         await axios.get((endpoint + `?module=account&action=tokennfttx&contractaddress=${ADDRESS}&page=1&offset=100&tag=latest&apikey=${apikey}`))
             .then(outputb => {
                 const { result } = outputb.data
                 this.setState({
                     nftdata: result
                 }) 
                 console.log(outputb.data)
             })        
     }

     render() {
         const { balance } = this.state;
         const { nftdata } = this.state;

         return ( <div className = "App" >
            <div className="head">
                <img src={logosm}/>
              

            </div>
             <div className = 'container' >
             <div className = 'row' >

                <div className="banner col-md-4"><img src={skullgif} /> </div>
             <form class = "gradient col-md-4 " > <  h4 > Mint SKULLS NFTs </h4> 
             < Button onClick = { connectwallet } > Connect Wallet <img className="meta" src={meta}/> </Button> 
                     

            
                 < div class = "wal"  id = 'wallet-address'>
             <  label
             for = "floatingInput" > Wallet Address </label> </div >
              <   div class = "amounte"  >
             < input type = "number"
             name = "amount"
             defaultValue = "1"
             min = "1"
             max = "30" / >
             <label> Enter amount of NFTs to mint. </label> 

             <h5 style = {
                 { color: "white", textShadow: "1px 1px 3px #000000" }
             } >NFT Minted = { balance.result }
             0/3000
             
             </h5>
             <Button className="enterb" onClick = { mint } > Mint! </Button> </div > 
         
             </form>
             <div className="banner col-md-4"><img src={skullgif} /> </div>
            

             <div className = "row items " >
                <h2>MINTED NFTS</h2>
             <div className = "carwp row"> {nftdata.slice(0, 8).map(result => {return ( <
                         div className = "card col-6 col-md-3">
                         <div className = "image-over" >
                         <img className = "card-img-top" src ={ nftpng + result.tokenID + '.jpg' }/>
                         </div> <div className = "card-caption col-12 p-0" >
                         <div className = "card-body" >
                         <h5 className = "mb-0 ttnft" > skullsNFT # { result.tokenID } </h5> <h6 className = "mb-0 mt-2" > Owner Wallet: < p className="trunncate"> { result.to } </p></h6 >
                         <div className = "card-bottom d-flex justify-content-between" >
                         </div > 
                         
                         </div> 
                         
                         </div >

                         
                         
                          </div>
                     ); })
             } 
             
             </div> </div> </div>
            
    
             
             <div class="row foot">
						<div class="col-lg-12 p-z-index text-center col-12 col-sm-12">
							<h2>JOIN</h2>
							  
						</div>
						<div class="col-lg-12 pt-5 p-z-index text-center col-12 col-sm-12">
							<p>
							 
								<span><a href="#" class="btn-default btn-hov">Telegram</a></span>
								<span><a href="#" class="btn-default btn-hov">Twitter</a></span>
                                <span><a href="#" class="btn-default btn-hov">Discord</a></span>
							</p>
						</div>
					</div>
                    
                    
                    </div> </div>
         );
     };
 }

 export default App;
