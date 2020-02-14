package com.practice.backend.vo;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.function.Function;

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

    public static <T extends PageVo, R> PageResultVo paging(T requestParam, Function<T, List<R>> function) {
        Integer pageNum = requestParam.getPageNum();
        Integer pageSize = requestParam.getPageSize();
        Page<R> page = PageHelper.startPage(pageNum, pageSize);
        function.apply(requestParam);
        return PageResultVo.format(page.getResult(), page.getTotal(), pageNum, pageSize);
    }

}
