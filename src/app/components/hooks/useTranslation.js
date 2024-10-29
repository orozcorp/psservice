"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getTranslation } from "../../server/locales/Footer";

export function useTranslation(ns) {
  const { lng } = useParams();
  const { data: textTrans, isPending } = useQuery({
    queryKey: ["TranslateHook", { lng, ns }],
    queryFn: async () => {
      const { data } = await getTranslation(lng, ns);
      return data;
    },
    staleTime: 1000 * 60 * 60 * 24, // 12 hours
  });

  const getValueFromKey = (key) => {
    if (!textTrans) return key;
    return textTrans[key] || key;
  };

  return { t: getValueFromKey, isLoading: isPending };
}
