export class FunctionsUtils {
  public static isUndefinedOrNull(obj: any): boolean {
    if (obj === undefined || obj == null) {
      return true;
    }
    return false;
  }

  public static isNotUndefinedOrNull(obj: any): boolean {
    return !this.isUndefinedOrNull(obj);
  }
}
