module calculator1::Calculator1{
    use std::signer;
    use std::string::utf8;
    use std::string;
    use std::string::String;


    // use aptos_framework::coin::{Self, MintCapability, FreezeCapability, BurnCapability};
    use aptos_framework::account;
    // use aptos_framework::event::EventHandle;
    // use aptos_framework::event;
    // use std::vector;
    // use aptos_framework::resource_account;
    // use aptos_framework::account::SignerCapability;


    /// Represents test BTC coin.
    struct BTC {}
    struct USDT {}
    struct DAI {}
    struct TR {}
    
    

    // struct CreateNewPoolEvent has store, drop {
    //     owner_addr: address,
    //     pool_addr: address,
    // }

    // struct AddingEvent has store, drop {
    //     add_res: u256,
    // }

    // struct Pools has key {
    //     pools: vector<address>,
    //     create_new_pool_events: EventHandle<CreateNewPoolEvent>,
        
    // }

    // struct PoolInfo has key{
        
    //     signer_cap: account::SignerCapability,
    // }


    
struct Add has key,store, drop {
        
        sum_: u64,
        
        }

     struct Sub has key,store, drop {
        
        sub_: u64,
        
        }

     struct Mul has key,store, drop {
        
        mul_: u64,
        
        }

     struct Div has key,store, drop {
        
        div_: u64,
        
        }

    // struct Calc has store,drop,key{
    //     operation: String,
    //     result: u64,
    // }
    
   
    // /// Storing mint/burn capabilities for `USDT` and `BTC` and `DAI` and `TR` coins under user account.
    // struct Caps<phantom CoinType> has key {
    //     mint: MintCapability<CoinType>,
    //     freeze: FreezeCapability<CoinType>,
    //     burn: BurnCapability<CoinType>,
    // }

    

    // /// Initializes `BTC` and `USDT` and `DAI` and `TR` coins.
    // public entry fun initialize<coinsymbol>(admin: &signer,
    // name:String,
    // coinsymbol:String,
    // ) {
    //     let (btc_b, btc_f, btc_m) =
    //         coin::initialize<coinsymbol>(admin,
    //             name, coinsymbol, 8, true);        
    //     move_to(admin, Caps<coinsymbol> { mint: btc_m, freeze: btc_f, burn: btc_b });        
    //     register_coins_all(admin);
        
    // }


    // // only resource_account should call this
    // public entry fun register_coins_all(account: &signer) {
    //     let account_addr = signer::address_of(account);
    //     if (!coin::is_account_registered<BTC>(account_addr)) {
    //         coin::register<BTC>(account);
    //     };      
    //     if (!coin::is_account_registered<USDT>(account_addr)) {
    //         coin::register<USDT>(account);
    //     }; 
    //     if (!coin::is_account_registered<DAI>(account_addr)) {
    //         coin::register<DAI>(account);
    //     }; 
    //     if (!coin::is_account_registered<TR>(account_addr)) {
    //         coin::register<TR>(account);
    //     };   
    // }


    // // Mints new coin `CoinType` on account `acc_addr`.
    // public entry fun mint_coin<CoinType>(admin: &signer, acc_addr: address, amount: u64) acquires Caps {
    //     let admin_addr = signer::address_of(admin);
    //     let caps = borrow_global<Caps<CoinType>>(admin_addr);
    //     let coins = coin::mint<CoinType>(amount, &caps.mint);
    //     coin::deposit(acc_addr, coins);
    // }


    // public entry fun register<CoinType>(from: &signer) {
    //     coin::register<CoinType>(from);
    // }


    // public entry fun transfer<CoinType>(from: &signer, to: address, amount: u64) {
    //     coin::transfer<CoinType>(from, to, amount);
    // }

    // fun create_pool_signer(pool_add: address): signer acquires PoolInfo {
    //     // let signer_cap = SignerCapability { pool_add };
    //      if (!exists<PoolInfo>(pool_add)) {
    //         move_to<PoolInfo>(pool_add, PoolInfo {
                
    //             signer_cap: SignerCapability{pool_add},

    //         });
    //      };
    //     let pool_info = borrow_global_mut<PoolInfo>(pool_add);

    //     account::create_signer_with_capability(&pool_info.signer_cap)
    // }


    // public entry fun create_new_pool(owner: &signer) acquires Pools {
    //     let (pool_signer, signer_cap) = account::create_resource_account(owner, vector::empty());

    //     let pool_addr = signer::address_of(&pool_signer);
       

    //     if (!exists<Pools>(signer::address_of(owner))) {
    //         move_to<Pools>(owner, Pools {
    //             pools: vector::empty(),
    //             create_new_pool_events: account::new_event_handle(owner),

    //         });
    //     };
    //     let pools = borrow_global_mut<Pools>(signer::address_of(owner));


    //     event::emit_event(&mut pools.create_new_pool_events, CreateNewPoolEvent {
    //         owner_addr: signer::address_of(owner),
    //         pool_addr,
    //     });
    //       let pool = PoolInfo {
            
    //         signer_cap
    //     };
    //     move_to<PoolInfo>(owner, pool);
    // }


   public entry fun add(owner: &signer,d: u64, e: u64 ) acquires Add  {
                
      
         let sum : u64 = d + e;
            if(!exists<Add>(signer::address_of(owner))) {
                move_to<Add>(owner,Add{
                  sum_: sum,
                });
            }
            else{
                 let addition = borrow_global_mut<Add>(signer::address_of(owner));
                 addition.sum_ = sum;
            };

    
    }

    public entry fun sub(owner: &signer,d: u64, e: u64 ) acquires Sub  {
                
      
          let dif : u64 = d - e;
            if(!exists<Sub>(signer::address_of(owner))) {
                move_to<Sub>(owner,Sub{
                  sub_: dif, 
                });
            }
            else{
                let subtraction = borrow_global_mut<Sub>(signer::address_of(owner));
                subtraction.sub_ = dif;
            };
    
    }

    public entry fun mul(owner: &signer,d: u64, e: u64 ) acquires Mul  {
                
      
         let mul : u64 = d * e;
            if(!exists<Mul>(signer::address_of(owner))) {
                move_to<Mul>(owner,Mul{
                  mul_: mul, 
                });
            }
            else{
                let multilication = borrow_global_mut<Mul>(signer::address_of(owner));
                multilication.mul_ = mul;
            };

    
    }

    public entry fun div(owner: &signer,d: u64, e: u64 ) acquires Div  {
                
      
          let rem : u64 = d / e;
            if(!exists<Div>(signer::address_of(owner))) {
                move_to<Div>(owner,Div{
                  div_: rem, 
                });
            }
            else{
                let division = borrow_global_mut<Div>(signer::address_of(owner));
                division.div_ = rem;
            };

    
    }


}
