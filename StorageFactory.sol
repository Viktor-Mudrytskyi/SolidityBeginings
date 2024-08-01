// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
import "./SimpleStorage.sol";

contract StorageFactory {
    SimpleStorage[] public simpleStrorageArray;

    function createSimpleStorage() public {
        simpleStrorageArray.push(new SimpleStorage());
    }

    function sfStore(
        uint256 _simpleStorageIndex,
        int256 _simpleStorageNumber
    ) public {
        simpleStrorageArray[_simpleStorageIndex].store(_simpleStorageNumber);
    }

    function sfStorageGet(
        uint256 _simpleStorageIndex
    ) public view returns (int256) {
        return simpleStrorageArray[_simpleStorageIndex].retrieve();
    }
}
