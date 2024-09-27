"use client";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export class CacheService {
  public static readonly CACHE_EXPIRE_TIME_DEFAULT = 24 * 60 * 60;
  public static readonly CACHE_1_HOUR = 60 * 60;
  public static readonly CACHE_EXPIRE_NONE = -1;

  public get(key: string) {
    CacheService.Get(key);
  }

  static Get(key: string) {
    if (typeof window === "undefined") return null;
    const cachedData = localStorage.getItem(key);
    if (!cachedData) return null;
    try {
      const data = JSON.parse(cachedData); // có thể sử dụng ENSCriptes để mã hóa . để sau
      if (data.expire === CacheService.CACHE_EXPIRE_NONE) {
        return data.value;
      }
      const currentSecond = dayjs().unix();
      if (data.expire < currentSecond) {
        CacheService.Clear(key);
        return null;
      }
      return data.value;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static Set(
    key: string,
    value: any,
    expireTimeBySecond = CacheService.CACHE_EXPIRE_TIME_DEFAULT
  ) {
    if (value === undefined || value === null || value === "") {
      return;
    }
    if (typeof window === "undefined") return;
    const currentMillisecond =
      expireTimeBySecond === CacheService.CACHE_EXPIRE_NONE
        ? CacheService.CACHE_EXPIRE_NONE
        : dayjs().unix() + expireTimeBySecond;

    const data = {
      value: value,
      expire: currentMillisecond,
    };

    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  public set(
    key: string,
    value: any,
    expireTimeBySecond = CacheService.CACHE_EXPIRE_TIME_DEFAULT
  ) {
    CacheService.Set(key, value, expireTimeBySecond);
  }

  static Clear(key: string) {
    if (typeof window === "undefined") return;
    localStorage.removeItem(key);
  }

  public clear(key: string) {
    localStorage.removeItem(key);
  }

  static ClearAll() {
    if (typeof window === "undefined") return;
    localStorage.clear();
  }

  public clearAll() {
    localStorage.clear();
  }
}
