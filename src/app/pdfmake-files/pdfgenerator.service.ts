import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake.min';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { CustomVFS } from './pdfmakefonts';
import { BehaviorSubject } from 'rxjs';

// pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.vfs = CustomVFS.myVfs;
pdfMake.fonts = {
  // Nirmala: {
  //   normal: 'nirmala_regular.woff',
  //   bold: 'nirmala_bold.woff',
  // },
  // TNR: {
  //   normal: 'tnr_regular.woff',
  //   bold: 'tnr_bold.woff',
  // },
  Noto: {
    normal: 'noto-sans-regular.woff',
    bold: 'noto-sans-700.woff'
  }


}
// pdfMake.fonts={
//   Roboto:{
//     normal:'Roboto-Regular.ttf',
//     bold:'Roboto-Medium.ttf'
//   }

// }

@Injectable({
  providedIn: 'root'
})


export class PdfgeneratorService {

  // eps95logo = CustomVFS.eps95logo;
  // dependentCodes:any;
  formData: any =
    {
      "empCode": 512775,
      "empName": "Srajan Soni",
      "pensionType": "1",
      "reason": 11,
      "gender": "Male",
      "dob": "08-09-1996",
      "nationality": "Indian",
      "religion": "Hindu",
      "maritalStatus": "Single",
      "fhName": "Vinod Kumar Soni",
      "claimantName": "Srajan Soni",
      "orgAddress": {
        "addr1": "IndianOil-AOD SO",
        "addr2": "Sector 3",
        "addr3": "Noonmati",
        "pincode": 781020
      },
      "commAddress": {
        "addr1": "69/5 GRASIM STAFF COLONY",
        "addr2": "BIRLAGRAM NAGDA",
        "addr3": "UJJAIN",
        "city": "Nagda",
        "pincode": 456331
      },
      "mobileNo": 6913610123,
      "familyDetails": [
        {
          "name": "Laxmi Soni",
          "dob": "08-10-1974",
          "relationship": 8,
          "bankAccno": "33928578291"
        }
      ],
      "bankDetails": {
        "accNo": "00033928578291",
        "name": "State bank of India",
        "branch": "Main Branch",
        "address": "MG Road, Nagda",
        "city": "Nagda",
        "pincode": 456335
      },
      "identificationMarks": {
        "mark1": "Mole on right hand near thumb",
        "mark2": ""
      },
      "height": {
        "val": 5.11,
        "unit": "F"
      },
      "attachments": {
        "jointPics": false,
        "copyOfBankPassbook": true,
        "spouseDOBProof": true,
        "childrenDob": true,
        "selfAadharCopy": false,
        "declaration": true
      },
      "byEmpCode": 512775,
      "empModDate": "20-04-2019",
      "subDate": "20-04-2019",
      "name": "Srajan Soni",
      "claimStatus": {
        "dateOfSeparation": null
      },
      "pensionAmounts": [
        [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      ]
    }

  estdDetails: any =
    {
      "epsNo": "12345",
      "stMonth": "200709",
      "empCode": "512775",
      "eps95MstEstd": {
        "epfRegionCode": "MH",
        "epfSubregionCode": " ",
        "estdCompCd": "5279 / X",
        "estdName": "INDIAN OIL CORPORATION LTD",
        "estdAddr1": "INDIAN OIL BHAWAN",
        "estdAddr2": "G-9,ALIYAVARJUNGMARG,",
        "estdAddr3": "BANDRA(EAST)",
        "estdCity": "MUMBAI",
        "estdPin": "400051"
      }
    };

  constructor() {
    console.log(pdfMake)
  }



  generatePdfUrl(formData2: any, estdDetails: any, time: any) {
    console.log(`Time taken to reach this function call ${performance.now() - time}`)
    let time2 = performance.now();
    console.log(this.estdDetails)
    //  this.formData=formData2;
    // this.estdDetails=estdDetails;
    console.log(pdfMake)
    // console.log(pdfFonts)
    var docDefinition = {
      content: [
        //header starts
        this.getHeaderDD(),
        // //header ends
        this.getPage1DD()

      ],
      styles: {
        header: {
          fontSize: 12,
          bold: true,
          lineHeight: 1.25
        },
        subheader: {
          fontSize: 8,
        },
        quote: {
          italics: true
        },
        small: {
          fontSize: 6
        },
        block: {
          margins: [0, 5]
        },
        tableHeader: {
          bold: true,
          color: "black",
          fontSize: 8
        },
        footnote: {
          fontSize: 6,
          margin:[0,1,0,0]
        }
      },
      pageSize: 'A4',
      pageOrientation: 'portrait',
      defaultStyle: {
        font: "Noto",
        fontSize: 10,
        lineHeight: 1.25
      },
      preserveSpace: {
        preserveLeadingSpaces: true
      }
    }
    console.log(`Time taken to generate dd is ${performance.now() - time2}`)
    let t3 = performance.now();
    let pdfUrl$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    console.log(`Time taken to assign a behaviour subject :${performance.now() - t3}`)
    let t1 = performance.now();
    pdfMake.createPdf(docDefinition).getDataUrl(function (outDoc) {
      let t2 = performance.now();
      console.log(`Time taken to generate pdf : ${t2 - t1} ms`)
      pdfUrl$.next(outDoc);
    });
    return pdfUrl$;
  }


  // All document definitons for PDFMake stored here 
  getHeaderDD(): any {
    let dd = [
      {
        columns: [
          {},
          {
            image: CustomVFS.eps95logo,
            fit: [50, 50],
            alignment: 'center',
          },
          {
            table: {
              body: [
                ["Forward Office Use Only\nInward No."]
              ]
            },
            alignment: "center",
            margin: [30, 0, -10, 0]
          },

        ]
      },
      {
        text: "कर्मचारी पेंशन योजना, 1995",
        alignment: 'center',
        style: 'header',

        margin: [0, 5, 0, 0]
      },
      {
        text: "EMPLOYEE'S PENSION SCHEME, 1995",
        alignment: 'center',
        style: 'header',
      },
      {
        text: "मासिक पेंशन के लिए आवेदन फॉर्म  10(घ) (क.पे.यो.)",
        alignment: 'center',
        style: 'header',
        // font: 'Nirmala'
      },
      {
        text: "APPLICATION FOR MONTHLY PENSION FORM 10-D (EPS)",
        alignment: 'center',
        style: 'header',
      },
      {
        text: "(Read INSTRUCTIONS before filling in this Form)",
        alignment: 'center',
        bold: false,
        style: 'header',
      }
    ]
    return dd;
  }


  getPage1DD(): any {

    let dd = [

      {
        table: {
          widths: ['*', '*'],
          body: [
            [
              {
                stack: [
                  //point 1
                  { text: "1. पेंशन का दावा किसके द्वारा किया गया है?", /*// font: "Nirmala"*/ },
                  { text: "\tBy whom is the pension claimed ?", preserveLeadingSpaces: true },
                  {
                    table: {
                      widths: [160],

                      body: [
                        [{ text: 'Member', }]
                      ]
                    },
                    margin: [10, 5],
                    alignment: "center"
                  }
                ],
              },
              {
                stack: [
                  //point 2
                  { text: "2. दावित पेंशन का प्रकार", /*// font: "Nirmala"*/ },
                  { text: "\tType of pension claimed.", preserveLeadingSpaces: true },
                  {
                    table: {
                      widths: [160],

                      body: [
                        [{ text: 'Superannuation', }]
                      ]
                    },
                    margin: [10, 5],
                    alignment: "center"
                  }
                ],
              }
            ],
            [
              { text: "3. क) सदस्य का नाम :(स्पष्ट अक्षरों में )/ Member's Name :" },
              { text: "\t" + this.formData.name, bold: true, preserveLeadingSpaces: true }
            ],
            [
              { text: "\tख) लिंग:/ Sex :", preserveLeadingSpaces: true },
              { text: "\t" + this.formData.gender, preserveLeadingSpaces: true }
            ],
            [
              { text: "\tग) वैवाहिक स्थिति:/ Marital Status :", preserveLeadingSpaces: true },
              { text: "\t" + this.formData.maritalStatus, preserveLeadingSpaces: true }
            ],
            [
              { text: "\tघ) जन्म  तिथि:/ Date of birth/Age :", preserveLeadingSpaces: true },
              { text: "\t" + this.formData.dob, preserveLeadingSpaces: true },
            ],
            [
              { text: "\tच) पिता /पति का नाम:/ Father /Spouse Name :", preserveLeadingSpaces: true },
              { text: "\t" + this.formData.fhName, preserveLeadingSpaces: true }
            ]
          ]
        },
        layout: {
          defaultBorder: false
        },
        lineHeight: 0.75
      },
      {
        table: {
          widths: ['*', '*'],
          body: [
            [
              { text: "4. कर्मचारी भविष्य  निधि खाता संख्या :\n\tE.P.F. Account Number :", columnSpan: 2 ,preserveLeadingSpaces:true}
              ,
               {

                table: {
                  widths: ['auto', 'auto', 'auto', 'auto'],
                  body: [
                    [{ text: "क्षे.का :\nRO", border: [false], }, { text: "उ.क्षे.का:\nSRO", border: [false],}, { text: "स्थापना कोड संख्या:\nEstablishment Code No.", border: [false], }, { text: "सदस्य खाता नं:\nMember's Account No", border: [false],}],
                    [{ fontSize: 8, text: this.estdDetails["eps95MstEstd"]["epfRegionCode"] || " " }, { fontSize: 8, text: this.estdDetails["eps95MstEstd"]["epfSubregionCode"] || " " }, { fontSize: 8, text: this.estdDetails["eps95MstEstd"]["estdCompCd"] || " " }, { fontSize: 8, text: this.estdDetails["epsNo"] || " " }]
                  ]
                }
                ,
                alignment: "center",
                fontSize: 7,
                bold: true

              }
            ],
           
          ],

        },
        layout: {
          defaultBorder: false
        },
        margin: [0, 2,0,0]
      },
      {
        stack:[
          { text: "5. स्थापना का नाम एवं पता जिसमे सदस्य अंतिम बार कार्यरत था :"},
          { text: "\tName & Address of the establishment in which the member was last employed:", preserveLeadingSpaces: true, fontSize: 9 },
        ],
        margin:[0,2,0,0]
      },
      //second section
      {
        table: {
          widths: ['*', 150],
          body: [
            [{ text: "Indian Oil Corporation Limited", colSpan: 2, preserveLeasdingSpaces: true }, ''],
            [{ text: this.formData.orgAddress.addr1 || "", colSpan: 2, preserveLeasdingSpaces: true }, ''],
            [{ text: this.formData.orgAddress.addr2 || "", colSpan: 2, preserveLeasdingSpaces: true }, ''],
            [{ border: [true, true, false, true], text: this.formData.orgAddress.addr3 || "", preserveLeasdingSpaces: true }, { border: [false, true, true, true], text: "PIN: " + this.formData.orgAddress.pincode }],
          ]
        }
      },
      //second section ends
      
      //third section starts
      {
        table: {
          widths: [300, 'auto'],
          body: [
            [{ text: "6. नौकरी छोड़ने की तिथि: / Date of leaving service:", }, { table: { body: [[{ text: this.formData.claimStatus.dateOfSeparation || "\t \t \t \t \t \t \t \t \t \t ", preserveLeadingSpaces: true }]] } }],
            [{ text: "7. नौकरी छोड़ने की कारण / Reason for leaving service:", }, { text: this.formData.reason.rsName, margin: [0, 1, 0, 0] }],
            [{ text: "8. पत्राचार का पता / Address for communication:", /*// font: "Nirmala",*/ colSpan: 2 }, ""]
          ],

        },
        layout: {
          defaultBorder: false,

        },
        margin: [-5, 2, 0, 0]
      },
      //third section ends
      //comm address starts
      {

        table: {
          widths: ['*', 150],
          body: [
            [{ text: this.formData.commAddress.addr1, colSpan: 2 }, ''],
            [{ text: this.formData.commAddress.addr2, colSpan: 2 }, ''],
            [{ border: [true, true, false, true], text: this.formData.commAddress.addr3 }, { border: [false, true, true, true], text: "PIN " + this.formData.commAddress.pincode }],
            [{ text: "Mobile/ Telephone: " + this.formData.mobileNo, colSpan: 2 }, ''],

          ]
        }
      },
      //comm address ends
    
      //section 3 starts
      {
        table: {
          widths: [300, 'auto'],

          body: [
            [
              {
                stack: [
                  { text: "8. क) कम दर से पेंशन के मामले में ( पूर्व पेंशन) ", /*// font: "Nirmala"*/ },
                  { text: " \t\tपेंशन के प्रारम्भ के लिए विकल्प की तिथि :", /*// font: "Nirmala",*/ preserveLeadingSpaces: true },
                  { text: "8 (a) In case of Reduced Pension (early pension):" },
                  { text: " \t\tDate of option for commencement of pension:", preserveLeadingSpaces: true },

                ]
              },
              {
                table: {
                  widths: ['auto', 'auto', 'auto'],
                  body: [
                    ["दिनांक/Date", "महीना/Month", "वर्ष/Year"],
                    // ["Date", "Month", "Year"],
                    [
                      {
                        table: {
                          body: [
                            [
                              { text: "\t ", preserveLeadingSpaces: true },
                              { text: "\t ", preserveLeadingSpaces: true },
                            ]
                          ],

                        }, lineHeight: 1.5, margin: [5, 0]

                      },
                      {
                        table: {
                          body: [
                            [
                              { text: "\t ", preserveLeadingSpaces: true },
                              { text: "\t ", preserveLeadingSpaces: true },
                            ]
                          ],

                        }, lineHeight: 1.5, margin: [5, 0]
                      },
                      {
                        table: {
                          body: [
                            [
                              { text: "\t ", preserveLeadingSpaces: true },
                              { text: "\t ", preserveLeadingSpaces: true },
                              { text: "\t ", preserveLeadingSpaces: true },
                              { text: "\t ", preserveLeadingSpaces: true },
                            ]
                          ],

                        }, lineHeight: 1.5, margin: [5, 0]
                      }
                    ]
                  ]
                },
                layout: {
                  defaultBorder: false,
                },
                /*// font: "Nirmala",*/
                fontSize: 8,
                alignment: "center",

              }

            ],

          ],

        },
        layout: {
          defaultBorder: false,

        },

        preserveLeadingSpaces: true,
        margin: [-5, 0, 0, 0]
      },
      {
        columns: [

          {
            stack: [
              { text: "8क) व्याख्यात्मक टिप्पणी :- कि सदस्य पूर्व पेंशन के मामले में पेंशन के प्रारंभ के लिए विकल्प की तिथि दर्शाते हुए विकल्प का प्रयोग कर सकता है ।" },
              {
                ul: [
                  "50 वर्ष की आयु पूर्ण करने पर सेवा से निर्गम की तिथि ।",
                  "फार्म 10 - डी को भरने की तिथि ।",
                  "(50 वर्ष पूर्ण करने पर) निर्गम की तिथि एवं 58 वर्ष की(अर्धवर्षिताआयु) पूर्ण करने की तिथि के बीच की तिथि ।"
                ],

              }
            ],
            /*// font: "Nirmala",*/
            style: "footnote"
          },
          {
            stack: [
              { text: "8(a) Explanatory Note : That the member can exercise option in case of ‘Early Pension’ indicating the date of option for commencement of pension from:" },
              {
                ul: [
                  "Date of exit from service on completion of 50 years of age",
                  "Date of filing the Form 10-D",
                  "Date between the date of exit (on completion of 50 years) and Date of completion of 58 years (Superannuation age)"
                ],

              }
            ],

            style: "footnote"
          }
        ]

      },
      //section 3 ends
    ]
    return dd

  }


}


