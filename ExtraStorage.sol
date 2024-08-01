// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "contracts/SimpleStorage.sol";

contract ExtraStorage is SimpleStorage {
    function store(int256 _num1) public override {
        num1 = _num1 + 5;
    }
}
