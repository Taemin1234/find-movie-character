import { useState, useEffect } from "react";
import { DataProps } from "@/types";

export function useFetchResult() {
    const [resultArr, setResultArr] = useState<DataProps>({})

    useEffect(() => {
        const fetchResult = async () => {
          try {
            const response = await fetch("/data/character.json");
            if (!response.ok) throw new Error("Failed to fetch result");
            const data = await response.json();
            setResultArr(data);
          } catch (error) {
            console.error("Error fetching JSON:", error);
            setResultArr({}); // 기본 빈 배열을 설정하여 앱이 깨지지 않도록 처리
          }
        };
      
        fetchResult();
    }, []);

    return resultArr
}