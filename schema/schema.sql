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
INSERT INTO dentist.patient_info (id, name, sex, age, phone, fixed_phone, contact_address, note, is_deleted, create_at)
VALUES (1, '男1', '男', 11, '18178324804', '18178324804', '联系地址', '备注', 0, '2020-01-19 11:42:26');
INSERT INTO dentist.patient_info (id, name, sex, age, phone, fixed_phone, contact_address, note, is_deleted, create_at)
VALUES (2, '男2', '男', 11, '18178324804', '18178324804', '联系地址', '备注', 1, '2020-01-19 11:42:38');
INSERT INTO dentist.patient_info (id, name, sex, age, phone, fixed_phone, contact_address, note, is_deleted, create_at)
VALUES (3, '女1', '女', 11, '18178324804', '18178324804', '联系地址', '备注', 0, '2020-01-19 11:42:50');

