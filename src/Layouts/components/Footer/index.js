import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import LogoFooter from "../../../components/LogoFooter";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import styles from "./Footer.module.scss";

const ITEMS = [
    { name: "Giới thiệu", path: "" },
    { name: "Liên hệ", path: "" },
    { name: "Tuyển dụng", path: "" },
    { name: "Tin tức", path: "" },
];
const LISTSUPPORTS = [
    { name: "Hướng dẫn chọn size", path: "" },
    { name: "Câu hỏi thường gặp", path: "" },
    { name: "Chính sách khách VIP", path: "" },
    { name: "Thanh toán - Giao hàng", path: "" },
    { name: "Chính sách đổi hàng", path: "" },
    { name: "Chính sách bảo mật", path: "" },
    { name: "Chính sách cookie", path: "" },
];

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
                            {ITEMS.map((item, index) => {
                                return (
                                    <Box key={index}>
                                        <Link
                                            className={styles.text_color}
                                            href={item.path}
                                        >
                                            <KeyboardDoubleArrowRightIcon />
                                            {item.name}
                                        </Link>
                                    </Box>
                                );
                            })}
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box
                                className={styles.title_footer}
                                boderbottom={1}
                            >
                                HỖ TRỢ KHÁCH HÀNG
                            </Box>
                            {LISTSUPPORTS.map((listsp, index) => {
                                return (
                                    <Box key={index}>
                                        <Link
                                            className={styles.text_color}
                                            href={listsp.path}
                                        >
                                            <KeyboardDoubleArrowRightIcon />
                                            {listsp.name}
                                        </Link>
                                    </Box>
                                );
                            })}
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
