import { useState, useCallback } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key],
  );

  const removeValue = useCallback(() => {
    setStoredValue(initialValue);
    localStorage.removeItem(key);
  }, [key, initialValue]);

  return { value: storedValue, setValue, removeValue };
}
// src/hooks/useLocalStorage.test.ts
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage (hook) - unit", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("deve retornar o valor inicial quando a chave não existir", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "default"));
    expect(result.current.value).toBe("default");
  });

  it("deve persistir o valor no localStorage", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", ""));

    act(() => {
      result.current.setValue("novo valor");
    });

    expect(result.current.value).toBe("novo valor");
    expect(localStorage.getItem("testKey")).toBe('"novo valor"');
  });

  it("deve ler o valor existente do localStorage", () => {
    localStorage.setItem("existingKey", JSON.stringify("valor existente"));

    const { result } = renderHook(() => useLocalStorage("existingKey", "default"));
    expect(result.current.value).toBe("valor existente");
  });

  it("deve remover o valor do localStorage", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "initial"));

    act(() => {
      result.current.setValue("saved");
    });

    act(() => {
      result.current.removeValue();
    });

    expect(result.current.value).toBe("initial");
    expect(localStorage.getItem("testKey")).toBeNull();
  });
});
