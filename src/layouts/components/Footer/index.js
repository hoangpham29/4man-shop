import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import LogoFooter from "../../../components/LogoFooter";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import styles from "./Footer.module.scss";

// const gray = gray[500];

const Footer = () => {
    return (
        <footer>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor="text.secondary"
                color="white"
            >
                <Container maxWidth="md">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <LogoFooter />
                            <Box>
                                <Link className={styles.text_color} href="/">
                                    <KeyboardDoubleArrowRightIcon />
                                    Giới thiệu
                                </Link>
                            </Box>
                            <Box>
                                <Link className={styles.text_color} href="/">
                                    <KeyboardDoubleArrowRightIcon />
                                    Liên hệ
                                </Link>
                            </Box>
                            <Box>
                                <Link className={styles.text_color} href="/">
                                    <KeyboardDoubleArrowRightIcon />
                                    Tuyển dụng
                                </Link>
                            </Box>
                            <Box>
                                <Link className={styles.text_color} href="/">
                                    <KeyboardDoubleArrowRightIcon />
                                    Tin tức
                                </Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box
                                className={styles.title_footer}
                                boderbottom={1}
                            >
                                HỖ TRỢ KHÁCH HÀNG
                            </Box>
                            <Box>
                                <Link className={styles.text_color} href="/">
                                    <KeyboardDoubleArrowRightIcon />
                                    Hướng dẫn đặt hàng
                                </Link>
                            </Box>
                            <Box>
                                <Link className={styles.text_color} href="/">
                                    <KeyboardDoubleArrowRightIcon />
                                    Hướng dẫn chọn size
                                </Link>
                            </Box>
                            <Box>
                                <Link className={styles.text_color} href="/">
                                    <KeyboardDoubleArrowRightIcon />
                                    Câu hỏi thường gặp
                                </Link>
                            </Box>
                            <Box>
                                <Link className={styles.text_color} href="/">
                                    <KeyboardDoubleArrowRightIcon />
                                    Chính sách khách VIP
                                </Link>
                            </Box>
                            <Box>
                                <Link className={styles.text_color} href="/">
                                    <KeyboardDoubleArrowRightIcon />
                                    Thanh toán - Giao hàng
                                </Link>
                            </Box>
                            <Box>
                                <Link className={styles.text_color} href="/">
                                    <KeyboardDoubleArrowRightIcon />
                                    Chính sách đổi hàng
                                </Link>
                            </Box>
                            <Box>
                                <Link className={styles.text_color} href="/">
                                    <KeyboardDoubleArrowRightIcon />
                                    Chính sách bảo mật
                                </Link>
                            </Box>
                            <Box>
                                <Link className={styles.text_color} href="/">
                                    <KeyboardDoubleArrowRightIcon />
                                    Chính sách cookie
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box
                        className={styles.info_footer}
                        pt={{ xs: 5, sm: 10 }}
                        pb={{ xs: 5, sm: 0 }}
                    >
                        Chủ quản: ông Nguyễn Ngọc Năm.
                        <br />
                        MST cá nhân: 0312028096
                        <br />
                        Số ĐKKD: 41G8031109 do UBND Quận 7 - Tp.HCM cấp ngày
                        05/06/2017
                    </Box>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;
