export const campaign = {
    header: {
        referenceNo: "MKT202007071012477850",
        success: true
    },
    result: {
        data: {
           campaigns: [
              {
                 carShields: [
                    {
                       code: "CS-0001",
                       desc: "Extra"
                    },
                    {
                       code: "CS-0002",
                       desc: "Plan A"
                    },
                    {
                       code: "CS-0003",
                       desc: "Plan B"
                    },
                    {
                       code: "CS-0004",
                       desc: "ไม่สมัคร"
                    }
                 ],
                 code: "CU-ALL-0001",
                 installmentTypes: [
                    {
                       code: "NOSTEP",
                       name: "No Step"
                    }
                 ],
                 insuranceACTList: [
                    {
                       insuranceCode: "ACT-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 insuranceCode: "INS-0003",
                 insuranceEWList: [
                    {
                       insuranceCode: "EW-0001",
                       insuranceName: "ไม่มี"
                    },
                    {
                       insuranceCode: "EW-0002",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 400,000 บาทขึ้นไป"
                    },
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 300,000-399,999 บาท"
                    },
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 200,000-299,999 บาท"
                    }
                 ],
                 insuranceOffers: [
                    {
                       code: "MOTOR-0001",
                       desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 1",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0002",
                       desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 2 Plus",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0003",
                       desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 2",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0004",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 1",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0005",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 2 Plus",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0006",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 2",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0007",
                       desc: "ซื้อประกันเอง หรือ ใช้ประกันเดิม",
                       kkMotor: false
                    }
                 ],
                 insurancePAList: [
                    {
                       insuranceCode: "PA-0001",
                       insuranceName: "ไม่มี"
                    },
                    {
                       insuranceCode: "PA-0002",
                       insuranceName: "แถม"
                    }
                 ],
                 matching: 7,
                 maxTerm: 84,
                 name: "อัตราดอกเบี้ยรถมือสองสำหรับเทส",
                 portionCode: "1",
                 productPrograms: [
                    {
                       carShieldFactor: 0.05,
                       iir: 2,
                       maxDBR: 0.85,
                       maxLTV: 0.75,
                       maxTerm: 60,
                       pdpgCode: "U301",
                       pdpgName: "Used Car ปกติ LTV 70%_TERM 72",
                       seq: "301",
                       sheet: "U01"
                    }
                 ],
                 rateCode: "RU-ALL-0002",
                 rateFactorCode: "RF-Used-0001",
                 rateFactorGroups: [
                    {
                       groupCode: "COM",
                       groupName: "Commision",
                       rateFactorSubGroups: [
                          {
                             rateFactors: [
                                {
                                   code: "COM_TERM_0",
                                   name: "0",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COM_TERM_12",
                                   name: "12",
                                   rateFactor: 0.10000,
                                   seq: 2
                                },
                                {
                                   code: "COM_TERM_24",
                                   name: "24",
                                   rateFactor: 0.20000,
                                   seq: 3
                                }
                             ],
                             subGroupCode: "ADD_TERM_COM",
                             subGroupName: "เพิ่ม Term Commission"
                          },
                          {
                             rateFactors: [
                                {
                                   code: "COM_0",
                                   name: "0%",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COM_1",
                                   name: "1%",
                                   rateFactor: 0.05000,
                                   seq: 2
                                },
                                {
                                   code: "COM_2",
                                   name: "2%",
                                   rateFactor: 0.10000,
                                   seq: 3
                                },
                                {
                                   code: "COM_3",
                                   name: "3%",
                                   rateFactor: 0.15000,
                                   seq: 4
                                },
                                {
                                   code: "COM_4",
                                   name: "4%",
                                   rateFactor: 0.20000,
                                   seq: 5
                                },
                                {
                                   code: "COM_6",
                                   name: "6%",
                                   rateFactor: 0.30000,
                                   seq: 6
                                },
                                {
                                   code: "COM_8",
                                   name: "8%",
                                   rateFactor: 0.40000,
                                   seq: 7
                                }
                             ],
                             subGroupCode: "ADD_COM",
                             subGroupName: "เพิ่ม Commission"
                          },
                          {
                             rateFactors: [
                                {
                                   code: "COM_REDUCE_0",
                                   name: "0%",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COM_REDUCE_2",
                                   name: "2%",
                                   rateFactor: -0.05000,
                                   seq: 2
                                },
                                {
                                   code: "COM_REDUCE_4",
                                   name: "4%",
                                   rateFactor: -0.10000,
                                   seq: 3
                                },
                                {
                                   code: "COM_REDUCE_6",
                                   name: "6%",
                                   rateFactor: -0.15000,
                                   seq: 4
                                },
                                {
                                   code: "COM_REDUCE_8",
                                   name: "8%",
                                   rateFactor: -0.20000,
                                   seq: 5
                                },
                                {
                                   code: "COM_REDUCE_10",
                                   name: "10%",
                                   rateFactor: -0.25000,
                                   seq: 6
                                }
                             ],
                             subGroupCode: "REDUCE_COM",
                             subGroupName: "ลด Commission"
                          }
                       ],
                       seq: 1
                    },
                    {
                       groupCode: "COND",
                       groupName: "Condition",
                       rateFactorSubGroups: [
                          {
                             rateFactors: [
                                {
                                   code: "COND_WAIVE_GUA_NO",
                                   name: "มีผู้ค้ำ",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COND_WAIVE_GUA_YES",
                                   name: "ไม่มีผู้ค้ำ",
                                   rateFactor: 0.25400,
                                   seq: 2
                                },
                                {
                                   code: "COND_WAIVE_GUA_SP",
                                   name: "ไม่มีผู้ค้ำ (PP,A)",
                                   rateFactor: 0.00000,
                                   seq: 3
                                }
                             ],
                             subGroupCode: "WAIVE_GUARANTOR",
                             subGroupName: "การขอยกเว้นผู้ค้ำประกัน"
                          },
                          {
                             rateFactors: [
                                {
                                   code: "COND_C2C_NO",
                                   name: "ไม่ใช่",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COND_C2C_YES",
                                   name: "ใช่",
                                   rateFactor: 2.00000,
                                   seq: 2
                                }
                             ],
                             subGroupCode: "C2C_FLAG",
                             subGroupName: "C2C ซื้อขายในครอบครัว"
                          },
                          {
                             rateFactors: [
                                {
                                   code: "COND_INSTAL_END",
                                   name: "END",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COND_INSTAL_BEGIN",
                                   name: "BEGIN",
                                   rateFactor: -0.10000,
                                   seq: 2
                                }
                             ],
                             subGroupCode: "INSTALLMENT_FLAG",
                             subGroupName: "รูปแบบการผ่อนชำระ"
                          },
                          {
                             rateFactors: [
                                {
                                   code: "COND_QUOTA_NONE",
                                   name: "NONE",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COND_QUOTA_HUB",
                                   name: "HUB",
                                   rateFactor: 0.25000,
                                   seq: 2
                                },
                                {
                                   code: "COND_QUOTA_REGION",
                                   name: "REGION",
                                   rateFactor: 0.50000,
                                   seq: 3
                                }
                             ],
                             subGroupCode: "QUOTA_REDUCE",
                             subGroupName: "Quota-การขอลดอัตราดอกเบี้ย"
                          }
                       ],
                       seq: 2
                    }
                 ],
                 token: "7ae4c7ef-a3c7-4e99-9dc3-78ece2667bd5"
              },
              {
                 carShields: [
                    {
                       code: "CS-0001",
                       desc: "Extra"
                    },
                    {
                       code: "CS-0001",
                       desc: "Plan A"
                    },
                    {
                       code: "CS-0001",
                       desc: "Plan B"
                    },
                    {
                       code: "CS-0001",
                       desc: "ไม่สมัคร"
                    }
                 ],
                 code: "CU-ALL-0002",
                 installmentTypes: [
                    {
                       code: "NOSTEP",
                       name: "No Step"
                    }
                 ],
                 insuranceACTList: [
                    {
                       insuranceCode: "ACT-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 insuranceCode: "INS-0004",
                 insuranceEWList: [
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "ไม่มี"
                    },
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 400,000 บาทขึ้นไป"
                    },
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 300,000-399,999 บาท"
                    },
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 200,000-299,999 บาท"
                    }
                 ],
                 insuranceOffers: [
                    {
                       code: "MOTOR-0002",
                       desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 1",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0002",
                       desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 2 Plus",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0002",
                       desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 2",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0002",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 1",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0002",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 2 Plus",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0002",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 2",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0002",
                       desc: "ซื้อประกันเอง หรือ ใช้ประกันเดิม",
                       kkMotor: false
                    }
                 ],
                 insurancePAList: [
                    {
                       insuranceCode: "PA-0003",
                       insuranceName: "ไม่มี"
                    },
                    {
                       insuranceCode: "PA-0003",
                       insuranceName: "แถม"
                    }
                 ],
                 matching: 8,
                 maxTerm: 84,
                 name: "อัตราดอกเบี้ยรถมือสอง",
                 portionCode: "2",
                 productPrograms: [
                    {
                       carShieldFactor: 0.05,
                       iir: 2,
                       maxDBR: 0.85,
                       maxLTV: 0.75,
                       maxTerm: 60,
                       pdpgCode: "U301",
                       pdpgName: "Used Car ปกติ LTV 70%_TERM 72",
                       seq: "301",
                       sheet: "U01"
                    }
                 ],
                 rateCode: "RU-ALL-0002",
                 rateFactorCode: "RF-Used-0001",
                 rateFactorGroups: [
                    {
                       groupCode: "COM",
                       groupName: "Commision",
                       rateFactorSubGroups: [
                          {
                             rateFactors: [
                                {
                                   code: "COM_TERM_0",
                                   name: "0",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COM_TERM_12",
                                   name: "12",
                                   rateFactor: 0.10000,
                                   seq: 2
                                },
                                {
                                   code: "COM_TERM_24",
                                   name: "24",
                                   rateFactor: 0.20000,
                                   seq: 3
                                }
                             ],
                             subGroupCode: "ADD_TERM_COM",
                             subGroupName: "เพิ่ม Term Commission"
                          },
                          {
                             rateFactors: [
                                {
                                   code: "COM_0",
                                   name: "0%",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COM_1",
                                   name: "1%",
                                   rateFactor: 0.05000,
                                   seq: 2
                                },
                                {
                                   code: "COM_2",
                                   name: "2%",
                                   rateFactor: 0.10000,
                                   seq: 3
                                },
                                {
                                   code: "COM_3",
                                   name: "3%",
                                   rateFactor: 0.15000,
                                   seq: 4
                                },
                                {
                                   code: "COM_4",
                                   name: "4%",
                                   rateFactor: 0.20000,
                                   seq: 5
                                },
                                {
                                   code: "COM_6",
                                   name: "6%",
                                   rateFactor: 0.30000,
                                   seq: 6
                                },
                                {
                                   code: "COM_8",
                                   name: "8%",
                                   rateFactor: 0.40000,
                                   seq: 7
                                }
                             ],
                             subGroupCode: "ADD_COM",
                             subGroupName: "เพิ่ม Commission"
                          },
                          {
                             rateFactors: [
                                {
                                   code: "COM_REDUCE_0",
                                   name: "0%",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COM_REDUCE_2",
                                   name: "2%",
                                   rateFactor: -0.05000,
                                   seq: 2
                                },
                                {
                                   code: "COM_REDUCE_4",
                                   name: "4%",
                                   rateFactor: -0.10000,
                                   seq: 3
                                },
                                {
                                   code: "COM_REDUCE_6",
                                   name: "6%",
                                   rateFactor: -0.15000,
                                   seq: 4
                                },
                                {
                                   code: "COM_REDUCE_8",
                                   name: "8%",
                                   rateFactor: -0.20000,
                                   seq: 5
                                },
                                {
                                   code: "COM_REDUCE_10",
                                   name: "10%",
                                   rateFactor: -0.25000,
                                   seq: 6
                                }
                             ],
                             subGroupCode: "REDUCE_COM",
                             subGroupName: "ลด Commission"
                          }
                       ],
                       seq: 1
                    },
                    {
                       groupCode: "COND",
                       groupName: "Condition",
                       rateFactorSubGroups: [
                          {
                             rateFactors: [
                                {
                                   code: "COND_WAIVE_GUA_NO",
                                   name: "มีผู้ค้ำ",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COND_WAIVE_GUA_YES",
                                   name: "ไม่มีผู้ค้ำ",
                                   rateFactor: 0.25400,
                                   seq: 2
                                },
                                {
                                   code: "COND_WAIVE_GUA_SP",
                                   name: "ไม่มีผู้ค้ำ (PP,A)",
                                   rateFactor: 0.00000,
                                   seq: 3
                                }
                             ],
                             subGroupCode: "WAIVE_GUARANTOR",
                             subGroupName: "การขอยกเว้นผู้ค้ำประกัน"
                          },
                          {
                             rateFactors: [
                                {
                                   code: "COND_C2C_NO",
                                   name: "ไม่ใช่",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COND_C2C_YES",
                                   name: "ใช่",
                                   rateFactor: 2.00000,
                                   seq: 2
                                }
                             ],
                             subGroupCode: "C2C_FLAG",
                             subGroupName: "C2C ซื้อขายในครอบครัว"
                          },
                          {
                             rateFactors: [
                                {
                                   code: "COND_INSTAL_END",
                                   name: "END",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COND_INSTAL_BEGIN",
                                   name: "BEGIN",
                                   rateFactor: -0.10000,
                                   seq: 2
                                }
                             ],
                             subGroupCode: "INSTALLMENT_FLAG",
                             subGroupName: "รูปแบบการผ่อนชำระ"
                          },
                          {
                             rateFactors: [
                                {
                                   code: "COND_QUOTA_NONE",
                                   name: "NONE",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COND_QUOTA_HUB",
                                   name: "HUB",
                                   rateFactor: 0.25000,
                                   seq: 2
                                },
                                {
                                   code: "COND_QUOTA_REGION",
                                   name: "REGION",
                                   rateFactor: 0.50000,
                                   seq: 3
                                }
                             ],
                             subGroupCode: "QUOTA_REDUCE",
                             subGroupName: "Quota-การขอลดอัตราดอกเบี้ย"
                          }
                       ],
                       seq: 2
                    }
                 ],
                 token: "7ae4c7ef-a3c7-4e99-9dc3-78ece2667bd5"
              },
              {
                 carShields: [
                    {
                       code: "CS-0002",
                       desc: "Extra"
                    },
                    {
                       code: "CS-0002",
                       desc: "Plan A"
                    },
                    {
                       code: "CS-0002",
                       desc: "Plan B"
                    }
                 ],
                 code: "CU-ALL-0004",
                 installmentTypes: [
                    {
                       code: "NOSTEP",
                       name: "No Step"
                    }
                 ],
                 insuranceACTList: [
                    {
                       insuranceCode: "ACT-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 insuranceCode: "INS-0006",
                 insuranceEWList: [
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "ไม่มี"
                    },
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 400,000 บาทขึ้นไป"
                    },
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 300,000-399,999 บาท"
                    },
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 200,000-299,999 บาท"
                    }
                 ],
                 insuranceOffers: [
                    {
                       code: "MOTOR-0006",
                       desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 1",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0006",
                       desc: "ซื้อประกันเอง หรือ ใช้ประกันเดิม",
                       kkMotor: false
                    }
                 ],
                 insurancePAList: [
                    {
                       insuranceCode: "PA-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 matching: 6,
                 maxTerm: 72,
                 minLoan: 300000,
                 name: "แคมเปญดอกเบี้ยพิเศสำหรับลูกค้าประวัติดี",
                 portionCode: "4",
                 productPrograms: [
                    {
                       carShieldFactor: 0.05,
                       iir: 2,
                       maxDBR: 0.85,
                       maxLTV: 0.75,
                       maxTerm: 60,
                       pdpgCode: "U301",
                       pdpgName: "Used Car ปกติ LTV 70%_TERM 72",
                       seq: "301",
                       sheet: "U01"
                    }
                 ],
                 rateCode: "RU-ALL-0004",
                 rateFactorCode: "RF-Used-0003",
                 rateFactorGroups: [
                    {
                       groupCode: "COND",
                       groupName: "Condition",
                       rateFactorSubGroups: [
                          {
                             rateFactors: [
                                {
                                   code: "COND_WAIVE_GUA_NO",
                                   name: "มีผู้ค้ำ",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COND_WAIVE_GUA_YES",
                                   name: "ไม่มีผู้ค้ำ",
                                   rateFactor: 0.25400,
                                   seq: 2
                                },
                                {
                                   code: "COND_WAIVE_GUA_SP",
                                   name: "ไม่มีผู้ค้ำ (PP,A)",
                                   rateFactor: 0.00000,
                                   seq: 3
                                }
                             ],
                             subGroupCode: "WAIVE_GUARANTOR",
                             subGroupName: "การขอยกเว้นผู้ค้ำประกัน"
                          },
                          {
                             rateFactors: [
                                {
                                   code: "COND_C2C_NO",
                                   name: "ไม่ใช่",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COND_C2C_YES",
                                   name: "ใช่",
                                   rateFactor: 2.00000,
                                   seq: 2
                                }
                             ],
                             subGroupCode: "C2C_FLAG",
                             subGroupName: "C2C ซื้อขายในครอบครัว"
                          }
                       ],
                       seq: 2
                    }
                 ],
                 token: "7ae4c7ef-a3c7-4e99-9dc3-78ece2667bd5"
              },
              {
                 carShields: [
                    {
                       code: "CS-0002",
                       desc: "Extra"
                    },
                    {
                       code: "CS-0002",
                       desc: "Plan A"
                    },
                    {
                       code: "CS-0002",
                       desc: "Plan B"
                    }
                 ],
                 code: "CU-ALL-0005",
                 installmentTypes: [
                    {
                       code: "NOSTEP",
                       name: "No Step"
                    }
                 ],
                 insuranceACTList: [
                    {
                       insuranceCode: "ACT-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 insuranceCode: "INS-0006",
                 insuranceEWList: [
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "ไม่มี"
                    },
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 400,000 บาทขึ้นไป"
                    },
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 300,000-399,999 บาท"
                    },
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 200,000-299,999 บาท"
                    }
                 ],
                 insuranceOffers: [
                    {
                       code: "MOTOR-0006",
                       desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 1",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0006",
                       desc: "ซื้อประกันเอง หรือ ใช้ประกันเดิม",
                       kkMotor: false
                    }
                 ],
                 insurancePAList: [
                    {
                       insuranceCode: "PA-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 matching: 7,
                 maxTerm: 84,
                 minLoan: 500000,
                 name: "แคมเปญดอกเบี้ยพิเศสำหรับลูกค้าประวัติดี (เทอม 84)",
                 portionCode: "5",
                 productPrograms: [
                    {
                       carShieldFactor: 0.05,
                       iir: 2,
                       maxDBR: 0.85,
                       maxLTV: 0.75,
                       maxTerm: 60,
                       pdpgCode: "U301",
                       pdpgName: "Used Car ปกติ LTV 70%_TERM 72",
                       seq: "301",
                       sheet: "U01"
                    }
                 ],
                 rateCode: "RU-ALL-0005",
                 rateFactorCode: "RF-Used-0003",
                 rateFactorGroups: [
                    {
                       groupCode: "COND",
                       groupName: "Condition",
                       rateFactorSubGroups: [
                          {
                             rateFactors: [
                                {
                                   code: "COND_WAIVE_GUA_NO",
                                   name: "มีผู้ค้ำ",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COND_WAIVE_GUA_YES",
                                   name: "ไม่มีผู้ค้ำ",
                                   rateFactor: 0.25400,
                                   seq: 2
                                },
                                {
                                   code: "COND_WAIVE_GUA_SP",
                                   name: "ไม่มีผู้ค้ำ (PP,A)",
                                   rateFactor: 0.00000,
                                   seq: 3
                                }
                             ],
                             subGroupCode: "WAIVE_GUARANTOR",
                             subGroupName: "การขอยกเว้นผู้ค้ำประกัน"
                          },
                          {
                             rateFactors: [
                                {
                                   code: "COND_C2C_NO",
                                   name: "ไม่ใช่",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COND_C2C_YES",
                                   name: "ใช่",
                                   rateFactor: 2.00000,
                                   seq: 2
                                }
                             ],
                             subGroupCode: "C2C_FLAG",
                             subGroupName: "C2C ซื้อขายในครอบครัว"
                          }
                       ],
                       seq: 2
                    }
                 ],
                 token: "7ae4c7ef-a3c7-4e99-9dc3-78ece2667bd5"
              },
              {
                 carShields: [
                    {
                       code: "CS-0002",
                       desc: "Extra"
                    },
                    {
                       code: "CS-0002",
                       desc: "Plan A"
                    },
                    {
                       code: "CS-0002",
                       desc: "Plan B"
                    }
                 ],
                 code: "CU-ALL-0006",
                 installmentTypes: [
                    {
                       code: "STEP",
                       name: "Step"
                    }
                 ],
                 insuranceACTList: [
                    {
                       insuranceCode: "ACT-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 insuranceCode: "INS-0007",
                 insuranceEWList: [
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "ไม่มี"
                    },
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 400,000 บาทขึ้นไป"
                    },
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 300,000-399,999 บาท"
                    },
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 200,000-299,999 บาท"
                    }
                 ],
                 insuranceOffers: [
                    {
                       code: "MOTOR-0007",
                       desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 1",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0007",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 1",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0007",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 2 Plus",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0007",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 2",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0007",
                       desc: "ซื้อประกันเอง หรือ ใช้ประกันเดิม",
                       kkMotor: false
                    }
                 ],
                 insurancePAList: [
                    {
                       insuranceCode: "PA-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 matching: 6,
                 name: "แุคมเปญดอกเบี้ยพิเศษ 0% 6 เดิอน",
                 portionCode: "6",
                 productPrograms: [
                    {
                       carShieldFactor: 0.05,
                       iir: 2,
                       maxDBR: 0.85,
                       maxLTV: 0.75,
                       maxTerm: 60,
                       pdpgCode: "U301",
                       pdpgName: "Used Car ปกติ LTV 70%_TERM 72",
                       seq: "301",
                       sheet: "U01"
                    }
                 ],
                 rateCode: "RU-ALL-0006",
                 rateFactorCode: "INS-0006",
                 token: "7ae4c7ef-a3c7-4e99-9dc3-78ece2667bd5"
              },
              {
                 carShields: [
                    {
                       code: "CS-0002",
                       desc: "Extra"
                    },
                    {
                       code: "CS-0002",
                       desc: "Plan A"
                    },
                    {
                       code: "CS-0002",
                       desc: "Plan B"
                    }
                 ],
                 code: "CU-ALL-0007",
                 installmentTypes: [
                    {
                       code: "STEP",
                       name: "Step"
                    }
                 ],
                 insuranceACTList: [
                    {
                       insuranceCode: "ACT-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 insuranceCode: "INS-0008",
                 insuranceEWList: [
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "ไม่มี"
                    },
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 400,000 บาทขึ้นไป"
                    },
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 300,000-399,999 บาท"
                    },
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 200,000-299,999 บาท"
                    }
                 ],
                 insuranceOffers: [
                    {
                       code: "MOTOR-0008",
                       desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 1",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0008",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 1",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0008",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 2 Plus",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0008",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 2",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0008",
                       desc: "ซื้อประกันเอง หรือ ใช้ประกันเดิม",
                       kkMotor: false
                    }
                 ],
                 insurancePAList: [
                    {
                       insuranceCode: "PA-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 matching: 7,
                 name: "แุคมเปญดอกเบี้ยพิเศษ 0% 6 เดิอน",
                 portionCode: "7",
                 productPrograms: [
                    {
                       carShieldFactor: 0.05,
                       iir: 2,
                       maxDBR: 0.85,
                       maxLTV: 0.75,
                       maxTerm: 60,
                       pdpgCode: "U301",
                       pdpgName: "Used Car ปกติ LTV 70%_TERM 72",
                       seq: "301",
                       sheet: "U01"
                    }
                 ],
                 rateCode: "RU-ALL-0006",
                 rateFactorCode: "INS-0007",
                 token: "7ae4c7ef-a3c7-4e99-9dc3-78ece2667bd5"
              },
              {
                 carShields: [
                    {
                       code: "CS-0002",
                       desc: "Extra"
                    },
                    {
                       code: "CS-0002",
                       desc: "Plan A"
                    },
                    {
                       code: "CS-0002",
                       desc: "Plan B"
                    }
                 ],
                 code: "CU-ALL-0008",
                 installmentTypes: [
                    {
                       code: "STEP",
                       name: "Step"
                    }
                 ],
                 insuranceACTList: [
                    {
                       insuranceCode: "ACT-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 insuranceCode: "INS-0007",
                 insuranceEWList: [
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "ไม่มี"
                    },
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 400,000 บาทขึ้นไป"
                    },
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 300,000-399,999 บาท"
                    },
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 200,000-299,999 บาท"
                    }
                 ],
                 insuranceOffers: [
                    {
                       code: "MOTOR-0007",
                       desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 1",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0007",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 1",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0007",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 2 Plus",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0007",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 2",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0007",
                       desc: "ซื้อประกันเอง หรือ ใช้ประกันเดิม",
                       kkMotor: false
                    }
                 ],
                 insurancePAList: [
                    {
                       insuranceCode: "PA-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 matching: 6,
                 name: "แุคมเปญดอกเบี้ยพิเศษ 0% 12 เดิอน",
                 portionCode: "8",
                 productPrograms: [
                    {
                       carShieldFactor: 0.05,
                       iir: 2,
                       maxDBR: 0.85,
                       maxLTV: 0.75,
                       maxTerm: 60,
                       pdpgCode: "U301",
                       pdpgName: "Used Car ปกติ LTV 70%_TERM 72",
                       seq: "301",
                       sheet: "U01"
                    }
                 ],
                 rateCode: "RU-ALL-0007",
                 rateFactorCode: "RF-Used-0004",
                 rateFactorGroups: [
                    {
                       groupCode: "COM",
                       groupName: "Commision",
                       rateFactorSubGroups: [
                          {
                             rateFactors: [
                                {
                                   code: "COM_0",
                                   name: "0%",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COM_4",
                                   name: "4%",
                                   rateFactor: 0.40000,
                                   seq: 5
                                },
                                {
                                   code: "COM_8",
                                   name: "8%",
                                   rateFactor: 0.85000,
                                   seq: 7
                                }
                             ],
                             subGroupCode: "ADD_COM",
                             subGroupName: "เพิ่ม Commission"
                          }
                       ],
                       seq: 1
                    }
                 ],
                 token: "7ae4c7ef-a3c7-4e99-9dc3-78ece2667bd5"
              },
              {
                 carShields: [
                    {
                       code: "CS-0002",
                       desc: "Extra"
                    },
                    {
                       code: "CS-0002",
                       desc: "Plan A"
                    },
                    {
                       code: "CS-0002",
                       desc: "Plan B"
                    }
                 ],
                 code: "CU-ALL-0009",
                 installmentTypes: [
                    {
                       code: "STEP",
                       name: "Step"
                    }
                 ],
                 insuranceACTList: [
                    {
                       insuranceCode: "ACT-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 insuranceCode: "INS-0008",
                 insuranceEWList: [
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "ไม่มี"
                    },
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 400,000 บาทขึ้นไป"
                    },
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 300,000-399,999 บาท"
                    },
                    {
                       insuranceCode: "EW-0004",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 200,000-299,999 บาท"
                    }
                 ],
                 insuranceOffers: [
                    {
                       code: "MOTOR-0008",
                       desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 1",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0008",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 1",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0008",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 2 Plus",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0008",
                       desc: "แถม - ประกันภัยรถยนต์ ประเภท 2",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0008",
                       desc: "ซื้อประกันเอง หรือ ใช้ประกันเดิม",
                       kkMotor: false
                    }
                 ],
                 insurancePAList: [
                    {
                       insuranceCode: "PA-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 matching: 7,
                 name: "แุคมเปญดอกเบี้ยพิเศษ 0% 12 เดิอน",
                 portionCode: "9",
                 productPrograms: [
                    {
                       carShieldFactor: 0.05,
                       iir: 2,
                       maxDBR: 0.85,
                       maxLTV: 0.75,
                       maxTerm: 60,
                       pdpgCode: "U301",
                       pdpgName: "Used Car ปกติ LTV 70%_TERM 72",
                       seq: "301",
                       sheet: "U01"
                    }
                 ],
                 rateCode: "RU-ALL-0007",
                 rateFactorCode: "RF-Used-0004",
                 rateFactorGroups: [
                    {
                       groupCode: "COM",
                       groupName: "Commision",
                       rateFactorSubGroups: [
                          {
                             rateFactors: [
                                {
                                   code: "COM_0",
                                   name: "0%",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COM_4",
                                   name: "4%",
                                   rateFactor: 0.40000,
                                   seq: 5
                                },
                                {
                                   code: "COM_8",
                                   name: "8%",
                                   rateFactor: 0.85000,
                                   seq: 7
                                }
                             ],
                             subGroupCode: "ADD_COM",
                             subGroupName: "เพิ่ม Commission"
                          }
                       ],
                       seq: 1
                    }
                 ],
                 token: "7ae4c7ef-a3c7-4e99-9dc3-78ece2667bd5"
              },
              {
                 carShields: [
                    {
                       code: "CS-0002",
                       desc: "Extra"
                    },
                    {
                       code: "CS-0002",
                       desc: "Plan A"
                    },
                    {
                       code: "CS-0002",
                       desc: "Plan B"
                    }
                 ],
                 code: "CU-ALL-0010",
                 installmentTypes: [
                    {
                       code: "NOSTEP",
                       name: "No Step"
                    }
                 ],
                 insuranceACTList: [
                    {
                       insuranceCode: "ACT-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 insuranceCode: "INS-0006",
                 insuranceEWList: [
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "ไม่มี"
                    },
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 400,000 บาทขึ้นไป"
                    },
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 300,000-399,999 บาท"
                    },
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 200,000-299,999 บาท"
                    }
                 ],
                 insuranceOffers: [
                    {
                       code: "MOTOR-0006",
                       desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 1",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0006",
                       desc: "ซื้อประกันเอง หรือ ใช้ประกันเดิม",
                       kkMotor: false
                    }
                 ],
                 insurancePAList: [
                    {
                       insuranceCode: "PA-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 matching: 7,
                 maxTerm: 72,
                 minLoan: 800000,
                 name: "แคมเปญดอกเบี้ยพิเศษสำหรับรถยนต์ Premium",
                 portionCode: "10",
                 productPrograms: [
                    {
                       carShieldFactor: 0.05,
                       iir: 2,
                       maxDBR: 0.85,
                       maxLTV: 0.75,
                       maxTerm: 60,
                       pdpgCode: "U301",
                       pdpgName: "Used Car ปกติ LTV 70%_TERM 72",
                       seq: "301",
                       sheet: "U01"
                    }
                 ],
                 rateCode: "RU-ALL-0008",
                 rateFactorCode: "INS-0008",
                 token: "7ae4c7ef-a3c7-4e99-9dc3-78ece2667bd5"
              },
              {
                 carShields: [
                    {
                       code: "CS-0001",
                       desc: "Extra"
                    },
                    {
                       code: "CS-0001",
                       desc: "Plan A"
                    },
                    {
                       code: "CS-0001",
                       desc: "Plan B"
                    },
                    {
                       code: "CS-0001",
                       desc: "ไม่สมัคร"
                    }
                 ],
                 code: "CU-ALL-0011",
                 installmentTypes: [
                    {
                       code: "NOSTEP",
                       name: "No Step"
                    }
                 ],
                 insuranceACTList: [
                    {
                       insuranceCode: "ACT-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 insuranceCode: "INS-0009",
                 insuranceEWList: [
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "ไม่มี"
                    },
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 400,000 บาทขึ้นไป"
                    },
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 300,000-399,999 บาท"
                    },
                    {
                       insuranceCode: "EW-0003",
                       insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 200,000-299,999 บาท"
                    }
                 ],
                 insuranceOffers: [
                    {
                       code: "MOTOR-0003",
                       desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 1",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0003",
                       desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 2 Plus",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0003",
                       desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 2",
                       kkMotor: false
                    },
                    {
                       code: "MOTOR-0003",
                       desc: "ซื้อประกันเอง หรือ ใช้ประกันเดิม",
                       kkMotor: false
                    }
                 ],
                 insurancePAList: [
                    {
                       insuranceCode: "PA-0002",
                       insuranceName: "ไม่มี"
                    }
                 ],
                 matching: 7,
                 maxTerm: 84,
                 name: "แคมเปญดอกเบี้ยรถปลดระวาง สงวนไทยและสยามซิตี้",
                 portionCode: "11",
                 productPrograms: [
                    {
                       carShieldFactor: 0.05,
                       iir: 2,
                       maxDBR: 0.85,
                       maxLTV: 0.75,
                       maxTerm: 60,
                       pdpgCode: "U301",
                       pdpgName: "Used Car ปกติ LTV 70%_TERM 72",
                       seq: "301",
                       sheet: "U01"
                    }
                 ],
                 rateCode: "RU-ALL-0010",
                 rateFactorCode: "RF-Used-0005",
                 rateFactorGroups: [
                    {
                       groupCode: "COM",
                       groupName: "Commision",
                       rateFactorSubGroups: [
                          {
                             rateFactors: [
                                {
                                   code: "COM_REDUCE_0",
                                   name: "0%",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COM_REDUCE_4",
                                   name: "4%",
                                   rateFactor: -0.50000,
                                   seq: 3
                                }
                             ],
                             subGroupCode: "REDUCE_COM",
                             subGroupName: "ลด Commission"
                          }
                       ],
                       seq: 1
                    },
                    {
                       groupCode: "COND",
                       groupName: "Condition",
                       rateFactorSubGroups: [
                          {
                             rateFactors: [
                                {
                                   code: "COND_INSTAL_END",
                                   name: "END",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COND_INSTAL_BEGIN",
                                   name: "BEGIN",
                                   rateFactor: -0.10000,
                                   seq: 2
                                }
                             ],
                             subGroupCode: "INSTALLMENT_FLAG",
                             subGroupName: "รูปแบบการผ่อนชำระ"
                          },
                          {
                             rateFactors: [
                                {
                                   code: "COND_DEA_OMK_NO",
                                   name: "ไม่ใช่",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COND_DEA_OMK_YES",
                                   name: "ใช่",
                                   rateFactor: 0.35000,
                                   seq: 2
                                }
                             ],
                             subGroupCode: "DEALER_OMAKASE",
                             subGroupName: "เป็น Dealer - บจก.โอมากาเสะ"
                          },
                          {
                             rateFactors: [
                                {
                                   code: "COND_3_PROV_NO",
                                   name: "ไม่ใช่",
                                   rateFactor: 0.00000,
                                   seq: 1
                                },
                                {
                                   code: "COND_3_PROV_YES",
                                   name: "ใช่",
                                   rateFactor: 1.00000,
                                   seq: 2
                                }
                             ],
                             subGroupCode: "PROV_BLACKLIST",
                             subGroupName: "ลูกค้าพำนักในพื้นที่ 3 จังหวัดชายแดนใต้"
                          }
                       ],
                       seq: 2
                    }
                 ],
                 token: "7ae4c7ef-a3c7-4e99-9dc3-78ece2667bd5"
              }
           ],
           productPrograms: [
              {
                 carShieldFactor: 0.05,
                 iir: 2,
                 maxDBR: 0.85,
                 maxLTV: 0.75,
                 maxTerm: 60,
                 pdpgCode: "U301",
                 pdpgName: "Used Car ปกติ LTV 70%_TERM 72",
                 seq: "301",
                 sheet: "U01",
                 deductList: [
                     {
                        title: "test",
                        seq: "1",
                        options: [
                            {
                                orderNo: "1",
                                item: "choice1"
                            },
                            {
                                orderNo: "2",
                                item: "choice2"
                            }
                        ]
                     }
                 ]
              }
           ]
        }
     }
};
