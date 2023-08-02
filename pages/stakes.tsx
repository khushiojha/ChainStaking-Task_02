import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

const Stakes = () => {
  const [cardanoStake, setCardanoStake] = useState(null);
  const [polkadotStake, setPolkadotStake] = useState(null);
  const [kusamaStake, setKusamaStake] = useState(null);

  // You should replace these functions with actual API calls
  const getCardanoStake = async () => {
    return 50000; // Replace this with actual API call
  };

  const getPolkadotStake = async () => {
    return 70000; // Replace this with actual API call
  };

  const getKusamaStake = async () => {
    return 60000; // Replace this with actual API call
  };

  useEffect(() => {
    getCardanoStake().then(setCardanoStake);
    getPolkadotStake().then(setPolkadotStake);
    getKusamaStake().then(setKusamaStake);
  }, []);

  return (
    <Box p="5">
      <Text>Cardano Stake: {cardanoStake}</Text>
      <Text>Polkadot Stake: {polkadotStake}</Text>
      <Text>Kusama Stake: {kusamaStake}</Text>
    </Box>
  );
};

export default Stakes;
