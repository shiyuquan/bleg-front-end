/**
 * 获取url参数的值
 * @param name 参数
 * @param url url
 */
export const getQueryStringByName = (name: string, url: string): string => {
    if (!url) {
        url = location.search;
    }
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const res = regex.exec(url);
    return res === null ? '' : decodeURIComponent(res[1].replace(/\+/g, ' '));
}