import Mock from 'mockjs'
import userMock from './userMock'
import patientBaseMock from './patientBaseMock'
// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 1000
});

// 登录相关和获取用户信息
Mock.mock(/\/api\/user\/login/, 'post', userMock.login);
Mock.mock(/\/api\/user\/info/, 'get', userMock.getUserInfo);
Mock.mock(/\/api\/user\/logout/, 'post', userMock.loginOut);
Mock.mock(/\/api\/patient\/base\/list/, 'post', patientBaseMock.getPatientBaseList);
Mock.mock(/\/api\/patient\/base/, 'post', patientBaseMock.addPatientBase);
Mock.mock(/\/api\/patient\/base/, 'delete', patientBaseMock.deletePatientBase);
Mock.mock(/\/api\/patient\/base/, 'put', patientBaseMock.updatePatientBase);

export default Mock
