# Simple ERC20 Staking Vault

An expert-level, flat-structured implementation of a staking smart contract. This repository provides a secure way for users to lock their ERC20 tokens and earn rewards proportional to their share of the pool.

## Features
* **Secure Math:** Uses OpenZeppelin's standard for safe arithmetic.
* **Pro-rata Rewards:** Fair distribution based on the duration and amount staked.
* **Flat Architecture:** All files are located in the root directory for easy navigation and deployment.

## Getting Started
1. Deploy the `StakingVault.sol` contract.
2. Transfer reward tokens to the contract address.
3. Users call `stake(amount)` to begin earning rewards.
4. Users call `withdraw()` to claim rewards and principal.

## Security
This code is for educational purposes. Always conduct a professional audit before deploying to a mainnet environment.
