// SPDX-License-Identifier: MIT
pragma solidity 0.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ZeppelinTestToken is ERC20 {
    constructor() ERC20("ZeppelinTestToken", "ZTT") {
          _mint(msg.sender, 100000000e18);
    }

}