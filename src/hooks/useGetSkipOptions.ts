import { useState } from "react";

import axios from "axios";

import { SkipDetailsType } from "@/types";

export const useGetSkipOptions = () => {
  const [errMsg, setErrMsg] = useState(false);
  const [loading, setLoading] = useState(true);
  const [skipOptions, setSkipOptions] = useState<SkipDetailsType[]>([]);
  const [selectedCard, setSelectedCard] = useState<SkipDetailsType | undefined>(
    undefined
  );

  const getSkipOptions = async () => {
    try {
      const { data } = await axios.get(
        `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`
      );
      setSkipOptions(data);
    } catch (error) {
      console.log("error", error);
      setErrMsg(true);
    } finally {
      setLoading(false);
    }
  };
  return {
    errMsg,
    loading,
    skipOptions,
    getSkipOptions,
    selectedCard,
    setSelectedCard,
  };
};
