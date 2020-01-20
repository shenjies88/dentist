create schema if not exists dentist collate utf8mb4_unicode_ci;

use dentist;
create table if not exists patient_info
(
    id              int unsigned auto_increment comment '主键'
        primary key,
    name            varchar(10)  default ''                not null comment '姓名',
    sex             varchar(10)  default ''                not null comment '性别',
    age             int unsigned default 0                 not null comment '年龄',
    phone           varchar(20)  default ''                not null comment '手机号码',
    fixed_phone     varchar(20)  default ''                null comment '固定电话',
    contact_address varchar(64)  default ''                not null comment '联系地址',
    note            varchar(512) default ''                null comment '备注',
    is_deleted      tinyint      default 0                 not null comment '逻辑删除 0正常，1删除',
    create_at       datetime     default CURRENT_TIMESTAMP not null comment '创建时间'
)
    comment '病人基本信息';


