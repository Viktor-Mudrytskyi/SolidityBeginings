// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract SafeMathTester {
    uint8 public big = 255;

    function add() public {
        big = big + 1;
    }
}
