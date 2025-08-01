let o = {
    "general": {
        "created_at": "创建时间",
        "updated_at": "更新时间",
        "creator": "创建人",
        "enabled": "启用",
        "disabled": "禁用",
        "yes": "是",
        "no": "否",
        "less-zero-tip": "小于0表示无限制",
        "success": "成功",
        "failed": "失败",
        "default": "默认",
        "home": "首页",
        "clipboard_disabled": "剪贴板功能被禁用。",
        "copy_success": "复制成功",
        "remark": "备注",
        "delete_confirm": "确认删除此项？",
        "clear_confirm": "确认清空数据？",
        "unbound": "未绑定",
        "bound": "已绑定",
        "name": "名称",
        "days": "天",
        "tips": "提示",
    },
    "actions": {
        "option": "操作",
        "new": "新建",
        "add": "添加",
        "edit": "编辑",
        "delete": "删除",
        "clear": "清空",
        "detail": "详情",
        "binding": "绑定",
        "unbind": "解绑",
        "authorized": "授权",
        "decrypt": "解密",
        "copy": "复制",
        "export": "导出",
        "sync": "同步",
        "view_private_key": "查看私钥",
        "import": "导入",
        "download_import_sample": "下载导入示例",
        "cancel": "取消",
        "save": "保存",
    },
    "dashboard": {
        "name": "数据概览",
        "login_times": "登录次数",
        "active_users": "活跃用户",
        "active_assets": "活跃资产",
        "login_failed_times": "登录失败次数",
        "user_online_count": "在线用户",
        "session_online_count": "在线会话",
        "gateway_active_count": "在线网关",
        "asset_active_count": "存活资产",
        "website_active_count": "存活Web资产",
        "date_counter": "活跃统计",
        "asset_type": "资产类型",
        "latest_session": "最新会话",
        "website_count": "Web资产",
    },
    "stat": {
        "days": "天",
        "info": {
            "system": "系统",
            "hostname": "主机名称",
            "uptime": "运行时长",
            "os": "操作系统",
            "arch": "系统架构",
            "load": "系统负载",
            "cpu": "CPU",
        },
        "memory": {
            "label": "内存",
            "used": "已使用",
            "free": "剩余",
            "cache": "缓存",
        },
        "disk": {
            "label": "磁盘",
            "mount_point": "挂载路径",
            "total": "总计大小",
            "free": "剩余空间",
            "percent": "使用占比"
        },
        "network": {
            "label": "网络",
            "interface": "网卡",
            "rx": "接收",
            "tx": "发送"
        },
    },
    "facade": {
        "asset_placeholder": "资产名称、协议、标签、网络地址",
        "accessing": "接入中",
    },
    "menus": {
        "dashboard": {
            "label": "数据概览",
        },
        "resource": {
            "label": "资源管理",
            "submenus": {
                "asset": "资产",
                "credential": "授权凭证",
                "snippet": "命令片段",
                "storage": "存储",
                "website": "Web资产",
                "certificate": "证书管理"
            }
        },
        "gateway": {
            "label": "接入网关",
            "submenus": {
                "ssh_gateway": "SSH网关",
                "agent_gateway": "安全网关"
            }
        },
        "log_audit": {
            "label": "日志审计",
            "submenus": {
                "online_session": "在线会话",
                "offline_session": "离线会话",
                "filesystem_log": "文件日志",
                "login_log": "登录日志",
                "operation_log": "操作日志"
            }
        },
        "sysops": {
            "label": "系统运维",
            "submenus": {
                "scheduled_task": "定时任务",
                "tools": "实用工具",
                "monitoring": "系统监控"
            }
        },
        "identity": {
            "label": "身份认证",
            "submenus": {
                "user": "用户",
                "user_group": "用户组",
                "role": "角色",
                "login_policy": "登录策略",
                "login_locked": "登录锁定",
            }
        },
        "authorised": {
            "label": "资源授权",
            "submenus": {
                "command_filter": "命令拦截器",
                "strategy": "授权策略"
            }
        },
        "setting": {
            "label": "系统设置",
        },
        "dev": {
            "label": "调试信息",
        }
    },
    "fs": {
        "operations": {
            "upload": "上传",
            "download": "下载",
            "batch_download": "批量下载",
            "rename": "重命名",
            "copy": "复制",
            "paste": "粘贴",
            "edit": "编辑",
            "remove": "删除",
            "create_file": "创建文件",
            "create_dir": "创建文件夹",
            "upload_file": "上传文件",
            "upload_dir": "上传目录"
        },
        "attributes": {
            "path": "路径",
            "type": "类型",
            "size": "大小",
            "last": {
                "modified": "最后修改",
                "accessed": "最后访问",
                "changed": "最后变更"
            },
            "permissions": {
                "label": "权限",
                "owner": "拥有者",
                "group": "组"
            }
        },
        "file_types": {
            "file": "文件",
            "directory": "目录",
            "link": "链接"
        },
        "delete_confirm": {
            "title": "您确定要删除该文件吗？",
            "content": "此操作将永久删除文件，确认执行？"
        },
        "navigation": {
            "back_to_prev": "返回上一级",
            "refresh": "刷新",
            "show_hidden_file": "显示隐藏文件",
            "hide_hidden_file": "隐藏隐藏文件",
            "file_tran": "文件进度"
        },
        "editor": {
            "label": "编辑器",
            "save": "保存",
            "refetch": "重新加载"
        },
        "transmission": {
            "filename": "文件名称",
            "size": "文件大小",
            "status": "状态",
            "progress": "进度",
            "speed": "速度",
            "options": {
                "uploading": "上传中",
                "transmitting": "传输中",
                "upload_failed": "上传失败",
                "upload_success": "上传成功"
            }
        }
    },
    "guacamole": {
        "state": {
            "idle": "正在初始化中...",
            "connecting": "正在连接服务器中...",
            "waiting": "正在等待服务器响应...",
            "connected": "连接服务器成功",
            "disconnecting": "会话关闭中...",
            "disconnected": "会话已关闭"
        },
        "tunnel": {
            "connecting": "隧道正在连接中...",
            "open": "隧道连接成功",
            "closed": "隧道连接已关闭",
            "unstable": "隧道连接不稳定",
        }
    },
    "identity": {
        "setup": {
            "user": "初始化用户",
            "go_to_login": "去登录",
            "success": "初始化用户成功",
            "password_not_same": "密码不一致",
        },
        "policy": {
            "label": "登录策略",
            "name": "名称",
            "ip_group": "IP 组",
            "ip_group_extra": "格式为逗号分隔的字符串（如：192.168.0.1, 192.168.1.0/24, 192.168.2.0-192.168.2.20），0.0.0.0/0表示匹配所有IP。",
            "action": {
                "label": "动作",
                "options": {
                    "allow": "允许",
                    "reject": "拒绝"
                }
            },
            "status": "状态",
            "priority": "优先级",
            "priority_extra": "数字越小优先级越高",
            "time_period": "时间区间",
            "type": "类型",
        },
        "role": {
            "type": "角色类型",
            "types": {
                "default": "内置角色",
                "new": "新增角色",
            },
            "permission": "权限",
        },
        "user_group": {
            "members": "成员",
            "members_count": "成员数量",
        },
        "user": {
            "username": "账号",
            "locked_at": "锁定时间",
            "locked_type": "锁定类型",
            "locked_type_username": "账号锁定",
            "locked_type_ip": "IP锁定",
            "otp": "双因素认证",
            "expiration_at": "失效时间",
            "type": "用户类型",
            "types": {
                "super_admin": "超级管理员",
                "admin": "管理员",
                "normal": "普通用户"
            },
            "nickname": "姓名",
            "mail": "邮箱",
            "status": "账号状态",
            "login": "登陆状态",
            "logins": {
                "online": "在线",
                "offline": "离线",
            },
            "recording": "录屏状态",
            "watermark": "水印状态",
            "public_key": "公钥",
            "password": "密码",
            "role": "角色",
            "options": {
                "reset": {
                    "password": {
                        "action": "重置密码",
                        "success": "重置密码成功",
                        "new": "新的密码",
                        "confirm": {
                            "title": "确认重置用户密码？",
                            "content": "未输入密码时将随机生成并通过邮件发送。"
                        }
                    },
                    "otp": {
                        "action": "重置双因素认证",
                        "confirm": {
                            "title": "确认重置用户双因素认证？",
                            "content": "重置后用户无需双因素认证即可登录。"
                        }
                    }
                },
            },
            "client_ip": "客户端IP",
            "reason": "原因",
            "user_agent": "浏览器",
            "login_at": "登录时间",
            "no_spaces_allowed": "禁止输入空格",
            "new_user_result": "用户创建成功",
            "last_login_at": "最后登录时间",
        },
        "options": {
            "authorized_asset": "授权资产",
            "login_policy": "登陆策略",
        },
    },
    "dw": {
        "selected": "已选择时间段",
        "select": "可拖动鼠标选择时间段",
        "clear": "清空选择",
        "version": "版本",
        "select_all": "全选",
        "week": {
            "label": "星期",
            "days": {
                "sunday": "星期日",
                "monday": "星期一",
                "tuesday": "星期二",
                "wednesday": "星期三",
                "thursday": "星期四",
                "friday": "星期五",
                "saturday": "星期六"
            }
        },
        "time": "时间"
    },
    "authorised": {
        "strategy": {
            "name": "名称",
            "upload": "上传",
            "download": "下载",
            "edit": "编辑",
            "remove": "删除",
            "rename": "重命名",
            "copy": "复制",
            "paste": "粘贴",
            "create_dir": "创建目录",
            "create_file": "创建文件",
        },
        "command_filter": {
            "name": "名称",
            "options": {
                "rule": "规则"
            },
            "rule": {
                "priority": "优先级",
                "priority_extra": "数值越小优先级越高",
                "ip_group": "IP组",
                "expiration_at": "失效时间",
                "type": {
                    "label": "匹配方式",
                    "options": {
                        "command": "完全匹配",
                        "regexp": "正则表达式匹配"
                    }
                },
                "match_content": "匹配内容",
                "action": {
                    "label": "动作",
                    "options": {
                        "allow": "允许",
                        "reject": "拒绝",
                    },
                    "status": "状态",
                    "authorised_at": "授权时间",
                    "authorised_user": "授权用户",
                    "expired_at": "过期时间",
                    "never_expired": "永不过期"
                },
            },
        },
        "label": {
            "authorised": "授权",
            "user": "用户",
            "user_group": "用户组",
            "asset": "资产",
            "command_filter": "命令拦截器",
            "strategy": "策略",
            "expired_at": "失效时间",
            "authorised_at": "授权时间",
            "never_expired": "永不失效",
        },
    },
    "sysops": {
        "status": "状态",
        "spec": "cron 表达式",
        "spec_run": "模拟运行",
        "spec_run_time": "最近十次运行时间",
        "spec_tooltip": "支持秒级定时任务，与标准cron表达式不同，首字段表示秒（兼容Quartz表达式规范），但不支持年份字段。",
        "last_exec_at": "最后执行时间",
        "asset": "资产",
        "command": "命令",
        "options": {
            "exec": "立即执行",
            "logs": "查看日志",
        },
        "logs": {
            "label": "日志",
            "exec_at": "执行时间",
            "messages": "消息"
        },
        "type": {
            "label": "类型",
            "options": {
                "check_status": "状态检查",
                "exec_command": "命令执行",
                "delete_log": "日志清理",
                "renew_certificate": "续签证书",
            },
        },
        "mode": {
            "label": "模式",
            "options": {
                "all_asset": "全部资产",
                "custom_asset": "自定义资产"
            }
        },
        "tools": {
            "target": "目标地址",
            "target_placeholder": "请输入IP地址或域名",
            "attempts": "次数",
            "attempts_tips": "设置请求发送的次数",
            "port": "端口",
            "testing": "开始检测",
        },
    },
    "audit": {
        "client_ip": "客户端IP",
        "user": "用户",
        "protocol": "协议",
        "asset": "资产",
        "connected_at": "接入时间",
        "disconnected_at": "断开时间",
        "connection_duration": "持续时长",
        "recording_size": "录屏大小",
        "command": "命令",
        "network": "网络地址",
        "filename": "文件名称",
        "executed_at": "执行时间",
        "username": "账号",
        "login_at": "登录时间",
        "action": "操作类型",
        "login_status": "登陆状态",
        "login_reason": "失败原因",
        "user_agent": "客户端",
        "operation": {
            "label": "类型",
            "account": "账户",
            "content": "详情",
            "status": "状态",
            "at": "操作时间",
            "options": {
                "user_reset_password": "重置用户密码",
                "asset_authorised": "资产授权",
                "user_add": "创建用户",
                "user_update": "修改用户",
                "user_delete": "删除用户",
                "user_enable": "启用用户",
                "user_disable": "禁用用户",
                "user_reset_otp": "重置用户双因子认证"
            }
        },
        "risk_level": {
            "label": "风险等级",
            "options": {
                "normal": "普通命令",
                "high_risk": "高危命令"
            }
        },
        "options": {
            "monitor": "监控",
            "playback": "回放",
            "disconnect": {
                "action": "断开",
                "confirm": "您确认要断开此会话吗？"
            },
        },
    },
    "access": {
        "settings": {
            "theme": "主题设置",
            "system": "系统设置",
            "font": "字体设置",
            "terminal": {
                "font": {
                    "size": "字体大小",
                    "family": "字体"
                },
                "line_height": "行高"
            },
            "mouse": {
                "label": "鼠标设置",
                "selection_copy": "选中复制",
                "right_click_paste": "右键粘贴",
            }
        },
        "batch": {
            "exec": "批量执行",
            "choose_asset": "选择资产",
        },
        "session": {
            "share": {
                "action": "会话分享",
                "cancel": "取消分享"
            }
        },
        "clipboard": "剪贴板",
        "combination_key": "组合键",
        "toggle_full_screen": "切换全屏",
        "required_auth": "登录参数",
        "reconnect": "重新连接",
        "filesystem": "文件系统",
        "use": "使用",
        "search": "搜索",
        "guacamole": {
            "error_title": "连接失败",
            "code": "错误代码",
            "message": "错误信息",
            "clipboard_required": "请输入剪贴板内容",
            "clipboard_placeholder": "粘贴到此处...",
        },
    },
    "account": {
        "my_asset": "我的资产",
        "profile": "个人中心",
        "nickname": "姓名",
        "logout": "退出登录",
        "language": "语言",
        "public_key": "公钥",
        "change": {
            "info": "修改个人信息",
            "password": "修改密码"
        },
        "access_token": "授权令牌",
        "old_password": "旧的密码",
        "new_password": "新的密码",
        "confirm_password": "确认密码",
        "submit": "提交",
        "regen": "重新生成",
        "username": "账户",
        "password": "密码",
        "captcha": "验证码",
        "login": {
            "action": "登录",
            "methods": {
                "passkey": "使用通行密钥认证",
                "password": "使用密码认证",
                "otp": "使用OTP认证"
            },
            "back": "返回上一步",
        },
        "otp": "双因素认证",
        "next": "下一步",
        "retry": "重试",
        "passkey": "通行密钥",
        "enter": "请输入",
        "auth_failed": "认证失败",
        "otp_bind_title": "您已成功开启双因素认证",
        "otp_bind_sub_title": "多因素认证-二次认证-登录身份鉴别,访问控制更安全。",
        "otp_unbind": "解除多因素认证",
        "otp_unbind_title": "您确认要解除双因素认证吗？",
        "otp_unbind_subtitle": "解除之后可能存在系统账号被暴力破解的风险。",
        "passkey_add": "添加通行密钥",
        "passkey_add_time": "添加时间",
        "passkey_used_time": "上次使用",
        "passkey_delete_title": "您确定要移除您的通行密钥吗？",
        "passkey_delete_content": "通行密钥可为您的账户和资产提供更好的保护，建议予以保留。",
        "mfa": "多重身份认证",
        "mfa_authing": "正在认证...",
        "mfa_retry": "重试",
        "mfa_auth_failed": "认证失败",
        "mfa_change_way": "切换验证方式",
        "otp_required": '您必须开启二次验证后才能继续操作',
        "password_expired": '您的密码已过期，请修改密码。',
        'no_mfa_title': '请先绑定安全认证方式',
        'no_mfa_subtitle': '您尚未绑定任何安全认证方式，无法查看敏感数据。',
        'enable_otp': '启用OTP认证',
        'enable_passkey': '启用通行密钥认证',
    },
    "assets": {
        "name": "名称",
        "type": "类型",
        "content": "内容",
        "status": "状态",
        "group": "分组",
        "group_tip": "右键可编辑/删除（Default 分组除外）",
        "width": "宽度",
        "height": "高度",
        "passphrase": "私钥密码",
        "logo": "图标",
        "protocol": "协议",
        "network": "网络",
        "tags": "标签",
        "owner": "所有者",
        "last_access_at": "最后访问时间",
        "addr": "网络地址",
        "account_type": "账户类型",
        "private_key": "私钥",
        "ip": "IP",
        "port": "端口",
        "username": "用户",
        "password": "密码",
        "credential": "授权凭证",
        "agent_gateway": "安全网关",
        "ssh_gateway": "SSH网关",
        "gateway_tip": "安全网关和SSH网关仅能二选一，同时选择时则使用SSH网关。",
        "description": "备注",
        "advanced_setting": "高级设置",
        "socks5_proxy": "Socks5代理",
        "socks5_proxy_enabled": "Socks5代理",
        "socks5_proxy_host": "代理服务器",
        "socks5_proxy_port": "代理端口",
        "socks5_proxy_username": "代理账号",
        "socks5_proxy_password": "代理密码",
        "display_settings": "显示设置",
        "color_depth": "色彩深度",
        "force_lossless": "无损压缩",
        "audio_settings": "音频设置",
        "disable_audio": "禁用音频",
        "enable_audio_input": "启用音频输入",
        "rdp_domain": "域",
        "preconnection_id": "预连接ID",
        "preconnection_blob": "预连接数据",
        "remote_app": "远程应用",
        "remote_app_dir": "远程应用目录",
        "remote_app_args": "远程应用参数",
        "rdp_drive": "网络驱动器",
        "rdp_enable_drive": "网络驱动器",
        "rdp_drive_path": "本地存储",
        "rdp_drive_path_extra": "未选择时将使用操作者的默认存储空间",
        "is_share": "共享",
        "is_default": "默认",
        "limit_size": "大小限制",
        "used_size": "已使用大小",
        "basic_settings": "基础设置",
        "target_server": "目标服务器",
        "domain": "域名",
        "domain_tip": "您用于访问受保护资产的域名（例如：www.example.com）需解析至本系统IP地址。",
        "scheme": "资产协议",
        "forward_host_or_ip": "资产的IP或域名",
        "forward_port": "资产端口",
        "entrance": "入口路径",
        "entrance_tip": "入口路径是首次访问自动打开的地址",
        "change_group": "修改分组",
        "general": "常规",
        "header": "请求头",
        "preserve_host": "保留主机名",
        "preserve_host_tip": "会将请求头中的主机名保留为原始请求的主机名，而不是代理服务器的主机名。",
        "custom_header": "自定义请求头",
        "custom_header_tip": "可以添加多个自定义请求头，格式为：键: 值。",
        "custom_certificate": "自定义证书",
        "header_key": "键",
        "header_value": "值",
        "basic_auth": "基本认证",
        "basic_auth_enabled": "资产需要基本认证",
        "basic_auth_username": "用户名",
        "basic_auth_password": "密码",
        "website_tip": "使用此功能前，请确保您在系统设置页面已开启反向代理功能。",
        "active": "活跃",
        "inactive": "离线",
        "access": "接入",
        "import": "导入资产",
        "copy": "复制资产",
        "download_sample": "下载示例",
        "import_asset_tip": "导入资产时，账号、密码和密钥、密码属于二选一，都填写时优先选择私钥和密码。",
        "import_asset_success": "导入资产成功",
        "import_asset_error": "导入资产失败",
        "import_asset_error_title": "请检查导入的文件，以下资产导入失败：",
        "bind_user": "绑定用户",
        "bind_user_group": "绑定用户组",
        "up": "上移",
        "down": "下移",
        "copy_public_key": "复制公钥",
        "filesystem": "文件系统",
        "website_entrance": "入口是用户进入Web资产的路径。",
        "conn_test": "网络状态检测",
        "generate_private_key": "生成私钥",
        "cert": "证书",
        "public": "公开访问",
        "public_tip": "限制只针对匿名用户生效。",
        "limit_ip": "IP访问限制",
        "limit_ip_tip": "限制用户只能从指定的IP地址访问资产。支持CIDR格式的IP地址，例如：192.168.1.0/24。支持-号分隔的IP地址，例如：192.168.1.0-192.168.1.255。多个IP地址请用逗号分隔。",
        "limit_time_enabled": "失效时间限制",
        "limit_time": "失效时间",
        "limit_password": "口令访问限制",
        "limit_password_tip": "使用正确的口令才能访问资产。",
        "ungrouped": "未分组",
        "modify_response": "修改响应",
        "modify_response_enabled": "启用响应体修改",
        "response_match_url": "匹配响应 URL（可选）",
        "response_match_url_tip": "仅当响应 URL 匹配该规则时生效，支持正则表达式。",
        "response_match_content_type": "匹配 Content-Type（可选）",
        "response_match_content_type_tip": "例如：text/html、application/json 等。",
        "add_rule": "添加一条规则",
        "modify_rules": "修改规则列表",
        "modify_type": "修改类型",
        "pattern": "匹配内容",
        "replacement": "替换为",
        "modify_response_tip": "可配置多个修改规则，按顺序依次生效。",
        "modify_response_compression_support": "自动支持 gzip、deflate、br 等压缩格式的解压与重新压缩。",
        "certificates": {
            "common_name": "域名",
            "certificate": "证书",
            "private_key": "私钥",
            "type": "证书类型",
            "self_signed": "自签发",
            "self_signed_tip_title": "提示: 可自行替换根证书，替换后重启生效。",
            "self_signed_root_ca_cert_path": "根证书文件路径",
            "self_signed_root_ca_key_path": "根证书私钥路径",
            "issued": "在线申请",
            "imported": "本地导入",
            "not_after": "过期时间",
            "issuer": "签发机构",
            "issuedStatus": "签发状态",
            "issuedPending": "签发中",
            "issuedSuccess": "签发成功",
            "issuedFailed": "签发失败",
            "is_default": "默认证书",
            "is_default_tooltip": "默认证书指的是在匹配不到其他证书的时候使用的证书。",
            "set_as_default": "设为默认",
            "issued_log": "证书申请日志",
            "renew_before": "续签提前时间",
        },
        "dns_providers": {
            "label": "DNS 供应商",
            "set": "设置 DNS 供应商",
            "remove": "移除 DNS 供应商",
            "remove_confirm_title": "移除 DNS 服务商设置",
            "remove_confirm_content": "移除后，将无法申请证书",
            "type": "供应商类型",
            "tencentcloud": "腾讯云",
            "alidns": "阿里云",
            "huaweicloud": "华为云",
            "cloudflare": "Cloudflare",
        },
        "dns_provider_config": "DNS 供应商配置",
        "dns_provider_config_tip": "请根据供应商的要求填写配置信息。",
        "terminal_settings": "终端设置",
        "disable_alive_check": "连接时禁用存活检查",
        "disable_alive_check_extra": "前端会定时发送心跳包，以保持连接的活跃状态，同时后端会向目标服务器发送请求并要求回复。",
        "env": "环境变量",
        "env_placeholder": "格式：name=value 每行一个。",
    },
    "gateways": {
        "name": "名称",
        "port": "端口",
        "os": "操作系统",
        "arch": "系统架构",
        "status": "状态",
        "version": "版本",
        "ssh_status": {
            "disconnected": "未连接",
            "connecting": "正在连接",
            "connected": "已连接",
            "error": "连接失败",
        },
        "username": "账号",
        "account_type": {},
        "register": "注册",
        "endpoint": "通信地址",
        "token": "通信令牌",
        "token_manage": "通信令牌管理",
        "install_shell": "安装脚本",
        "online": "在线",
        "offline": "离线",
        "stat": {
            "label": "统计数据",
            "uptime": "运行时间",
            "cpu": "处理器",
            "memory": "内存",
            "disk": "磁盘",
            "disk_io": "磁盘 I/O",
            "network": "网络",
            "network_io": "网络 I/O",
            "load": "负载",
            "host": "主机",
            "process": "进程",
            "system": "系统",
            "model": "型号",
            "logical_cores": "逻辑核心",
            "physical_cores": "物理核心",
            "percent": "使用率",
            "total": "总大小",
            "used": "已使用",
            "connections": "网络连接",
            "tcp_states": "TCP 连接状态",
            "ping": "网络延迟",
            "external_ip": "外网IP",
            "internal_ips": "内网IP",
        },
        "load": {
            "normal": "系统空闲",
            "moderate": "轻度繁忙",
            "busy": "资源紧张",
        },
        "sort": "排序",
        "sort_success": "排序成功",
        "add_token": "新增令牌",
        "edit_token_remark": "修改令牌备注"
    },
    "settings": {
        "system": {
            "setting": "系统设置",
            "name": "系统名称",
            "logo": "系统图标",
            "copyright": "系统版权",
            "icp": "备案号",
            "login": {
                "background_color": "登录背景颜色",
                "background_image": "登录背景图片"
            },
            "ip": {
                "extractor": "IP地址获取方式",
                "extractor_direct": "网络地址",
                "trust_list": "信任的IP地址（CIDR格式）",
                "trust_placeholder": "输入后请回车确认",
                "trust_error": "请输入有效的CIDR格式。例如: 192.168.1.0/24"
            },
            "watermark": {
                "setting": "接入水印",
                "status": "水印状态",
                "content": "水印内容",
                "append": {
                    "user": "水印追加用户",
                    "asset": "水印追加资产"
                },
                "font": {
                    "color": "水印字体颜色",
                    "size": "水印字体大小"
                }
            },
            "access": {
                "max_idle_second": "终端访问最大空闲时长",
                "second": "秒",
            },
        },

        "security": {
            "setting": "安全设置",
            "protection": "登录保护",
            "captcha": "图形验证码",
            "force_otp": "强制多因素认证",
            "access_require_mfa": "接入资产需要多因素认证",
            "disable_password_login": "禁用密码登陆",
            "devices": "设备",
            "minute": "分钟",
            "session": {
                "duration": "登录会话有效时长",
                "count_custom": "自定义登录会话有效数量",
                "count_limit": "登录会话有效数量",
            },
            "password": {
                "complexity": "密码复杂度",
                "recommend": "推荐",
                "customize": "自定义",
                "expiration_period": "密码有效期",
                "too_short": "密码长度不能小于",
                "too_simple": "密码需包含大写字母、小写字母、数字、特殊字符中的至少 ? 种",
                "cannot_contain_username": "密码不能包含用户名",
                "cannot_be_palindrome": "密码不能是回文",
                "cannot_be_weak": "禁止弱密码",
                "character": "字符",
                "type": "类型",
            },
            "login_lock": {
                "setting": "登陆锁定",
                "tip": "开启后，在指定时间内连续登录失败时，账号或IP将会被限制登录，解除限制请访问",
                "enabled": "登录失败锁定",
                "failed_duration": "登录失败统计时长",
                "failed_times": "登录失败统计次数",
                "account_duration": "账号锁定持续时间",
                "ip_duration": "IP地址锁定持续时间"
            },
            "passkey": {
                "setting": "通行令牌登陆设置",
                "enabled": "通行令牌登陆",
                "domain": "外部访问域名",
                "origins": "允许使用通行令牌的来源",
                "origins_tip": "结尾不要包含 /",
                "origins_error": "请输入正确的URL地址"
            }
        },
        "sshd": {
            "setting": "SSH 代理服务器",
            "tip": "开启后，将会在本地监听一个端口，可以使用ssh客户端进行访问授权的SSH资产，账号密码与本系统一致。",
            "enabled": "SSH服务",
            "addr": "监听地址",
            "private_key": "认证私钥",
            "generate_private_key": "生成私钥",
            "port_forwarding": {
                "enabled": "开启隧道",
                "host_port": "允许隧道转发的IP端口"
            },
            "usage": "使用示例",
            "mode_proxy": "代理模式",
            "direct_proxy": "直连模式",
            "disable_password_auth": "禁用密码认证",
        },
        "rp": {
            "setting": "反向代理服务器",
            "tip": "开启后，将会在本地监听一个端口，可以将http/https服务映射到本机。",
            "enabled": "反向代理服务",
            "addr": "监听地址",
            "redirect_to_https": "自动重定向到HTTPS",
            "auto_tls": "自动申请HTTPS证书",
            "cert": "证书",
            "cert_key": "证书私钥",
            "self_proxy": "代理自身系统",
            "domain": "域名",
            "system_root": "系统根路径",
            "system_root_extra": "访问反向代理的Web资产时，需要验证当前登录的用户是否有权限，会重定向到系统的授权页面，此配置项内容为您当前登录的URL根路径。"
        },
        "rdp": {
            "setting": "RDP 设置",
            "enable": {
                "wallpaper": "启用壁纸",
                "theming": "启用主题",
                "font_smoothing": "启用字体平滑",
                "full_window_drag": "启用窗口拖动",
                "desktop_composition": "启用桌面合成",
                "menu_animations": "启用菜单动画"
            },
            "disable": {
                "bitmap_caching": "禁用位图缓存",
                "offscreen_caching": "禁用离屏缓存"
            }
        },
        "vnc": {
            "setting": "VNC 设置",
            "cursor": {
                "setting": "光标设置",
                "local": "本地",
                "remote": "远程"
            },
            "swap_red_blue": "交换红蓝",
            "color_depth": "色彩深度"
        },
        "mail": {
            "setting": "邮箱设置",
            "enabled": "邮件服务",
            "host": "邮箱服务器",
            "port": "邮箱端口",
            "username": "邮箱账户",
            "from": "邮箱发送人",
            "password": "邮箱密码",
            "tip": "您需要开启邮箱后才可以发送测试邮件。",
            "mail": "邮箱地址",
            "title": "邮箱标题",
            "content": "邮箱正文",
            "send": "发送邮件",
        },
        "identity": {
            "setting": "身份认证",
        },
        "webauthn": {
            "setting": "WebAuthn",
        },
        "ldap": {
            "setting": "LDAP 认证",
            "tip": "开启后，将会使用LDAP进行用户身份认证。",
            "url": "LDAP地址",
            "user": "LDAP用户",
            "password": "LDAP密码",
            "base_dn": "LDAP基础DN",
            "filter": "LDAP过滤器",
            "user_search": {
                "size_limit": "LDAP最大搜索结果",
                "size_limit_tooltip": "LDAP最大搜索结果，0表示不限制。",
                "filter": "LDAP用户搜索过滤器",
                "filter_tooltip": "LDAP用户搜索过滤器，例如：(objectClass=person)。"
            },
            "user_property_mapping": "LDAP用户属性映射"
        },
        "log": {
            "setting": "日志设置",
            "recording": {
                "enabled": "录屏状态"
            },
            "session": {
                "saved_limit_days": "会话保存限制"
            },
            "login_log": {
                "saved_limit_days": "登录日志保存限制"
            },
            "cron_log": {
                "saved_limit_days": "定时任务日志保存限制"
            }
        },
        "backup": {
            "setting": "备份与恢复",
            "tip": "恢复数据时，如存在登录账号相同的用户时，会保留原系统中的数据，此外由于登录密码加密之后不可逆，恢复的账户密码将随机产生。",
            "recovery": "恢复备份"
        },
        "license": {
            "setting": "授权许可",
            "device": "设备信息",
            "machine_id": "机器码",
            "import": "导入授权",
            "request": "更新授权",
            "binding": "绑定授权",
            "info": "许可证信息",
            "max": {
                "asset_count": "最大资产数",
                "concurrent_count": "最大并发数",
                "user_count": "最大用户数"
            },
            "expired_at": "许可到期时间",
            "no_limit": "无限制",
            "type": {
                "label": "许可类型",
                "options": {
                    "free": "免费版",
                    "test": "试用专业版",
                    "premium": "专业版",
                    "enterprise": "企业版"
                }
            },
            "restricted": {
                "label": "访问受限",
                "content": "当前许可证不支持此功能。",
                "pay": "立即购买",
            },
            "test_warning": "您正在试用专业版，到期时间是",
        },
        "logo": {
            "setting": "资产Logo",
            "preset": "系统预设",
            "custom": "自定义Logo"
        },
        "about": {
            "setting": "关于",
            "current_version": "当前版本",
            "latest_version": "最新版本",
            "update_content": "更新内容",
            "upgrade": {
                "action": "立即更新",
                "title": "升级系统",
                "content": "您确定要升级系统版本吗？",
                "failed": "更新失败",
                "success": "更新成功",
                "success_content": "更新成功，是否立即刷新页面？"
            }
        }
    },
    "errors": {
        "1000": "无效的令牌",
        "1001": "需要进行设置",
        "10000": "记录不存在",
        "10001": "名称已存在",
        "10002": "无效的参数",
        "10003": "您不能操作自己的账户",
        "10004": "账户或密码不正确",
        "10005": "账户已禁用",
        "10006": "验证码不正确",
        "10007": "登录失败次数过多",
        "10008": "需要双因素授权码",
        "10009": "双因素授权码不正确",
        "10010": "您的 IP 地址不允许登录",
        "10011": "当前时间段不允许登录",
        "10012": "邮箱配置不完整",
        "10013": "默认数据不可删除",
        "10014": "权限被拒绝",
        "10015": "不是 SSH 协议",
        "10016": "不支持的协议",
        "10017": "会话已关闭",
        "10018": "文件系统已禁用",
        "10019": "Web资产未找到",
        "10020": "Web资产已禁用",
        "10021": "原密码不正确",
        "10022": "密码登陆已被禁用",
        "20000": "获取许可证失败",
        "20001": "当前系统与您的绑定机器码不匹配，请及时更换。",
        "20002": "您的许可证已过期，请及时续费。",
        "20003": "您的在线会话超过许可限制。",
        "20004": "您的用户数量超过许可限制。",
        "20005": "您的资产数量超过许可限制。",
        "30000": "网关未在线",
        "30001": "隧道不存在",
        "40000": "反向代理已禁用",
        "40001": "导入资产失败",
        "50000": "系统正在遭受攻击",
        "50001": "系统通行令牌已禁用",
        "50002": "用户双因素认证已禁用",
        "50003": "图片过大",
        "60001": "密码长度太短",
        "60002": "密码复杂度过低",
        "60003": "密码不能包含用户名",
        "60004": "不允许弱密码",
        "60005": "密码不能是回文"
    }
}

export default o;