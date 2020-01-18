package com.qingsongyayi.backend.vo;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

/**
 * @author shenjies88
 * @since 2020/1/12-12:38
 */
@Data
@AllArgsConstructor
public class PageResultVo<T> {

    private Long count;

    private Integer pageNum;

    private Integer pageSize;

    private List<T> list;


    public static <T> PageResultVo format(List<T> list, Long count, Integer pageNum, Integer pageSize) {
        return new PageResultVo(count, pageNum, pageSize, list);
    }
}
