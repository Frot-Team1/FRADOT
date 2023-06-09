// 전역 스타일
import LayOut from "@/components/common/layout";
import {
    // Main
    Main,
    Title,
    SubTitle,
    Ptag,
    //제목
    TitleContainer,
    // 컨텐츠
    ContentsContainer,
    // 인사말
    HelloContainer,
    Hello,
    // 팀원 소개
    TeamInformationContainer,
    Member,
    // 프로젝트 소개
    ProjecInformationContainer,
    // Logo
    LogoImgContainer,
    Logo,
    LogoImg_1,
    LogoImg_2,
    // Color
    Color,
    ColorContainer,
    MyColor,
    ColorContent,
} from "../../styles/AboutUs.style.js";

const AboutUs = () => {
    return (
        <LayOut>
            <Main>
                <TitleContainer>
                    <h2>About US</h2>
                    <hr />
                </TitleContainer>
                {/* 제목 */}

                <ContentsContainer>
                    {/* 인사말 */}
                    <HelloContainer>
                        <Title>인사말</Title>
                        <Hello>
                            <Ptag>안녕하세요 팀 "FRADOT"입니다.</Ptag>
                            <br />
                            <Ptag>
                                4월 즈음 '서울 열린 데이터 광장 공공데이터 활용 모바일 앱/웹 경진대회'에 관하여 접하였고, 본
                                경진대회에 함께 스터디를 하던 팀원들이 참여하면서 팀원들과의 커뮤니케이션 능력과, 개개인만의
                                경험치, 실력 등을 쌓고자하는 마음으로 임하게 되었습니다.
                            </Ptag>
                            <br />
                            <Ptag>
                                이번 기회로 팀원들과 소통하며, 개개인의 실력을 중간점검하는 계기이자 멈춰있지 않고 앞으로 더
                                나아갈 수 있는 계기가 되었습니다.
                            </Ptag>
                            <br />
                            <Ptag>
                                주제를 선정할 때 여러 의견이 있었지만 최대한 많은 사람들에게 도움이 되고, 동시에 실용적인 주제를
                                정하고자 하였습니다.
                            </Ptag>
                            <br />
                            <Ptag>
                                공공데이터를 찾아보며 고민하던 끝에 편의시설의 위치와 정보들이 있는 데이터들이 눈에 띄었습니다.
                                해당 데이터들을 사용하여 사용자가 원하는 여러 인프라 시설의 종류를 선택한 후 선택한 조건들을 갖춘
                                지역을 찾아주는 웹 사이트를 만들면 실용성이 높을 것 같다고 판단하여 제작하게 되었습니다.
                            </Ptag>
                        </Hello>
                    </HelloContainer>

                    {/* 팀원 소개
          <TeamInformationContainer>
            <Title>팀원소개</Title>
            <div>
              <SubTitle>조장</SubTitle>
              <div>
                <Ptag>이름: 김재하</Ptag>
                <Ptag>나이: 21</Ptag>
                <Ptag>경력</Ptag>
                <Ptag>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Ptag>
                <Ptag>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Ptag>
              </div>
            </div>
            <div>
              <SubTitle>조원</SubTitle>
              <Member>
                <li>
                  <Ptag>이름: 조해인</Ptag>
                  <Ptag>나이: 23</Ptag>
                  <Ptag>경력</Ptag>
                  <Ptag>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </Ptag>
                  <Ptag>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </Ptag>
                </li>

                <li>
                  <Ptag>이름: 김대진</Ptag>
                  <Ptag>나이: 25</Ptag>
                  <Ptag>경력</Ptag>
                  <Ptag>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </Ptag>
                  <Ptag>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </Ptag>
                </li>

                <li>
                  <Ptag>이름: 최지원</Ptag>
                  <Ptag>나이: 25</Ptag>
                  <Ptag>경력</Ptag>
                  <Ptag>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </Ptag>
                  <Ptag>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </Ptag>
                </li>

                <li>
                  <Ptag>이름: 김규홍</Ptag>
                  <Ptag>나이: 23</Ptag>
                  <Ptag>경력</Ptag>
                  <Ptag>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </Ptag>
                  <Ptag>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </Ptag>
                </li>
              </Member>
            </div>
          </TeamInformationContainer> */}

                    {/* 프로젝트 소개 */}
                    <ProjecInformationContainer>
                        <Title>프로젝트 소개</Title>

                        {/* 제안배경 */}
                        <div>
                            <SubTitle>제안배경 및 목적</SubTitle>
                            <Ptag>
                                IT 서비스의 급격한 발전으로, 우리는 여러 서비스를 이용하며 이전보다 편한 삶을 살아가고 있습니다.
                            </Ptag>
                            <br />
                            <Ptag>
                                예를 들어 부동산에 직접 방문하지 않고도 방의 구조나 가격 등을 조회할 수 있고, 심지어 버스가 어디에
                                정차해 있는지도 알아볼 수 있는 서비스도 개발이 되어있습니다.
                            </Ptag>
                            <br />
                            <Ptag>
                                그러나 아직 사용자들이 원하는 인프라들을 모두 갖춘 지역들을 찾아주는 서비스는 상용화되어 있지
                                않으므로 특정 인프라들을 한 데 갖춘 지역 자체를 찾아볼 수 있는 웹페이지를 개발하고자 했습니다.
                            </Ptag>
                            <br />
                            <Ptag>
                                문화, 의료, 체육, 복지, 교육 등에 초점을 맞춰 서비스를 만들었으며, 조건사항을 복수로 선택하여도
                                시설마다 마커 이미지를 다르게 적용하여 사용자가 필요로 하는 시설을 한 번에 찾아볼 수 있습니다.
                            </Ptag>
                            <br />
                            <Ptag>
                                이 서비스를 통하여 이사를 할 때도 필요한 시설이 한 곳에 몰려 있는 곳을 찾아 지역을 선택할 수
                                있습니다. 의료와 복지시설이 필요한 사용자는 의료, 복지 시설을 선택하여 두 시설이 함께 있는
                                지역으로 이사를 결정하는 데에도 도움이 될 것입니다.
                            </Ptag>
                            <br />
                            <Ptag>
                                또한 한눈에 어떤 인프라들이 어느 지역에 위치하고 있고 밀집되어 있는지 확인할 수 있기 때문에
                                인프라의 불균형이나 특정 인프라가 부족한 지역을 쉽게 파악하여 도시개발 및 인프라 계획에 활용하는
                                데에도 도움이 될 것입니다.
                            </Ptag>
                            <br />
                        </div>

                        {/* logo */}
                        <div>
                            <SubTitle>Logo</SubTitle>
                            <div>
                                <LogoImgContainer>
                                    <Logo>
                                        <LogoImg_1 />
                                        <p>Logo</p>
                                    </Logo>

                                    <Logo>
                                        <LogoImg_2 />
                                        <p>Grid System</p>
                                    </Logo>
                                </LogoImgContainer>
                                <div></div>
                            </div>
                        </div>

                        {/* color */}
                        <Color>
                            <Title>COLOR</Title>
                            <SubTitle>Main Color</SubTitle>
                            <ColorContainer>
                                <ColorContent>
                                    <MyColor divColor="#756BFF"></MyColor>
                                    <Ptag>#756BFF</Ptag>
                                </ColorContent>
                                <ColorContent>
                                    <MyColor divColor="#333333"></MyColor>
                                    <Ptag>#333333</Ptag>
                                </ColorContent>
                            </ColorContainer>

                            <SubTitle>Sub Color</SubTitle>
                            <ColorContainer>
                                <ColorContent>
                                    <MyColor divColor="#F8F8FF"></MyColor>
                                    <Ptag>#F8F8FF</Ptag>
                                </ColorContent>
                                <ColorContent>
                                    <MyColor divColor="#F0F8FF"></MyColor>
                                    <Ptag>#F0F8FF</Ptag>
                                </ColorContent>
                                <ColorContent>
                                    <MyColor divColor="#306D95"></MyColor>
                                    <Ptag>#306D95</Ptag>
                                </ColorContent>
                            </ColorContainer>
                        </Color>
                    </ProjecInformationContainer>
                </ContentsContainer>
            </Main>
        </LayOut>
    );
};

export default AboutUs;
